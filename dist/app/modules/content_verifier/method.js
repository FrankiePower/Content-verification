"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentVerifierMethod = void 0;
const klayr_sdk_1 = require("klayr-sdk");
const content_1 = require("./stores/content");
const stats_1 = require("./stores/stats");
const user_reputation_1 = require("./stores/user_reputation");
class ContentVerifierMethod extends klayr_sdk_1.Modules.BaseMethod {
    async getContent(methodContext, hash) {
        const contentStore = this.stores.get(content_1.ContentStore);
        try {
            return await contentStore.get(methodContext, Buffer.from(hash));
        }
        catch (error) {
            return null;
        }
    }
    async getStats(methodContext) {
        const statsStore = this.stores.get(stats_1.StatsStore);
        try {
            return await statsStore.get(methodContext, Buffer.from('globalStats'));
        }
        catch (error) {
            return { totalContents: 0, verifiedContents: 0 };
        }
    }
    async getUserReputation(methodContext, userId) {
        const userReputationStore = this.stores.get(user_reputation_1.UserReputationStore);
        try {
            const userReputation = await userReputationStore.get(methodContext, Buffer.from(userId));
            const reputation = userReputation.totalSubmissions > 0
                ? userReputation.verifiedSubmissions / userReputation.totalSubmissions
                : 0;
            return {
                reputation,
                totalSubmissions: userReputation.totalSubmissions,
                verifiedSubmissions: userReputation.verifiedSubmissions,
            };
        }
        catch (error) {
            return {
                reputation: 0,
                totalSubmissions: 0,
                verifiedSubmissions: 0,
            };
        }
    }
}
exports.ContentVerifierMethod = ContentVerifierMethod;
//# sourceMappingURL=method.js.map