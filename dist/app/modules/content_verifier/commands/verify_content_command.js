"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyContentCommand = exports.verifyContentSchema = void 0;
const klayr_sdk_1 = require("klayr-sdk");
const content_1 = require("../stores/content");
const stats_1 = require("../stores/stats");
const user_reputation_1 = require("../stores/user_reputation");
exports.verifyContentSchema = {
    $id: 'contentVerifier/verifyContent',
    type: 'object',
    required: ['hash'],
    properties: {
        hash: {
            dataType: 'string',
            fieldNumber: 1,
        },
    },
};
class VerifyContentCommand extends klayr_sdk_1.Modules.BaseCommand {
    constructor() {
        super(...arguments);
        this.schema = exports.verifyContentSchema;
    }
    async verify(context) {
        const { hash } = context.params;
        const contentStore = this.stores.get(content_1.ContentStore);
        try {
            await contentStore.get(context, Buffer.from(hash));
        }
        catch (error) {
            return {
                status: klayr_sdk_1.StateMachine.VerifyStatus.FAIL,
                error: new Error('Content not found'),
            };
        }
        return { status: klayr_sdk_1.StateMachine.VerifyStatus.OK };
    }
    async execute(context) {
        const { hash } = context.params;
        const contentStore = this.stores.get(content_1.ContentStore);
        const statsStore = this.stores.get(stats_1.StatsStore);
        const userReputationStore = this.stores.get(user_reputation_1.UserReputationStore);
        const content = await contentStore.get(context, Buffer.from(hash));
        if (content.verified) {
            return;
        }
        content.verified = true;
        await contentStore.set(context, Buffer.from(hash), content);
        let stats;
        try {
            stats = await statsStore.get(context, Buffer.from('globalStats'));
        }
        catch (error) {
            stats = { totalContents: 0, verifiedContents: 0 };
        }
        stats.verifiedContents += 1;
        await statsStore.set(context, Buffer.from('globalStats'), stats);
        let userReputation;
        try {
            userReputation = await userReputationStore.get(context, Buffer.from(content.userId));
        }
        catch (error) {
            userReputation = { userId: content.userId, totalSubmissions: 0, verifiedSubmissions: 0 };
        }
        userReputation.verifiedSubmissions += 1;
        await userReputationStore.set(context, Buffer.from(content.userId), userReputation);
    }
}
exports.VerifyContentCommand = VerifyContentCommand;
//# sourceMappingURL=verify_content_command.js.map