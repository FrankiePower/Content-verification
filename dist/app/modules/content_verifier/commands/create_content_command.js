"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContentCommand = exports.createContentSchema = void 0;
const klayr_sdk_1 = require("klayr-sdk");
const content_1 = require("../stores/content");
const stats_1 = require("../stores/stats");
const user_reputation_1 = require("../stores/user_reputation");
exports.createContentSchema = {
    $id: 'contentVerifier/createContent',
    type: 'object',
    required: ['hash', 'userId', 'timestamp'],
    properties: {
        hash: {
            dataType: 'string',
            fieldNumber: 1,
        },
        userId: {
            dataType: 'string',
            fieldNumber: 2,
        },
        timestamp: {
            dataType: 'uint32',
            fieldNumber: 3,
        },
    },
};
class CreateContentCommand extends klayr_sdk_1.Modules.BaseCommand {
    constructor() {
        super(...arguments);
        this.schema = exports.createContentSchema;
    }
    async verify(_context) {
        return { status: klayr_sdk_1.StateMachine.VerifyStatus.OK };
    }
    async execute(context) {
        const { hash, userId, timestamp } = context.params;
        const contentStore = this.stores.get(content_1.ContentStore);
        const statsStore = this.stores.get(stats_1.StatsStore);
        const userReputationStore = this.stores.get(user_reputation_1.UserReputationStore);
        const newContent = {
            userId,
            timestamp,
            verified: false,
        };
        await contentStore.set(context, Buffer.from(hash), newContent);
        let stats;
        try {
            stats = await statsStore.get(context, Buffer.from('globalStats'));
        }
        catch (error) {
            stats = { totalContents: 0, verifiedContents: 0 };
        }
        stats.totalContents += 1;
        await statsStore.set(context, Buffer.from('globalStats'), stats);
        let userReputation;
        try {
            userReputation = await userReputationStore.get(context, Buffer.from(userId));
        }
        catch (error) {
            userReputation = { userId, totalSubmissions: 0, verifiedSubmissions: 0 };
        }
        userReputation.totalSubmissions += 1;
        await userReputationStore.set(context, Buffer.from(userId), userReputation);
    }
}
exports.CreateContentCommand = CreateContentCommand;
//# sourceMappingURL=create_content_command.js.map