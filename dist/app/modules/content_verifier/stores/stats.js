"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsStore = exports.ContentStatsSchema = void 0;
const klayr_sdk_1 = require("klayr-sdk");
exports.ContentStatsSchema = {
    $id: '/contentVerifier/contentStats',
    type: 'object',
    required: ['totalContents', 'verifiedContents'],
    properties: {
        totalContents: {
            dataType: 'uint32',
            fieldNumber: 1,
        },
        verifiedContents: {
            dataType: 'uint32',
            fieldNumber: 2,
        },
    },
};
class StatsStore extends klayr_sdk_1.Modules.BaseStore {
    constructor() {
        super(...arguments);
        this.schema = exports.ContentStatsSchema;
    }
}
exports.StatsStore = StatsStore;
//# sourceMappingURL=stats.js.map