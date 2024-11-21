"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentVerifierEndpoint = void 0;
const klayr_sdk_1 = require("klayr-sdk");
const content_1 = require("./stores/content");
const stats_1 = require("./stores/stats");
const user_reputation_1 = require("./stores/user_reputation");
class ContentVerifierEndpoint extends klayr_sdk_1.Modules.BaseEndpoint {
    async getContent(ctx) {
        const { hash } = ctx.params;
        const contentStore = this.stores.get(content_1.ContentStore);
        try {
            return await contentStore.get(ctx, Buffer.from(hash));
        }
        catch (error) {
            return null;
        }
    }
    async getStats(ctx) {
        const statsStore = this.stores.get(stats_1.StatsStore);
        try {
            return await statsStore.get(ctx, Buffer.from('globalStats'));
        }
        catch (error) {
            return { totalContents: 0, verifiedContents: 0 };
        }
    }
    async getReputation(ctx) {
        const { userId } = ctx.params;
        const userReputationStore = this.stores.get(user_reputation_1.UserReputationStore);
        try {
            const userReputation = await userReputationStore.get(ctx, Buffer.from(userId));
            const reputation = userReputation.totalSubmissions > 0
                ? userReputation.verifiedSubmissions / userReputation.totalSubmissions
                : 0;
            return {
                userId,
                reputation,
                totalSubmissions: userReputation.totalSubmissions,
                verifiedSubmissions: userReputation.verifiedSubmissions,
            };
        }
        catch (error) {
            return {
                userId,
                reputation: 0,
                totalSubmissions: 0,
                verifiedSubmissions: 0,
            };
        }
    }
}
exports.ContentVerifierEndpoint = ContentVerifierEndpoint;
//# sourceMappingURL=endpoint.js.map