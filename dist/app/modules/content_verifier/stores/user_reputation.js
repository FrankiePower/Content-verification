"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReputationStore = exports.UserReputationSchema = void 0;
const klayr_sdk_1 = require("klayr-sdk");
exports.UserReputationSchema = {
    $id: '/contentVerifier/userReputation',
    type: 'object',
    required: ['userId', 'totalSubmissions', 'verifiedSubmissions'],
    properties: {
        userId: {
            dataType: 'string',
            fieldNumber: 1,
        },
        totalSubmissions: {
            dataType: 'uint32',
            fieldNumber: 2,
        },
        verifiedSubmissions: {
            dataType: 'uint32',
            fieldNumber: 3,
        },
    },
};
class UserReputationStore extends klayr_sdk_1.Modules.BaseStore {
    constructor() {
        super(...arguments);
        this.schema = exports.UserReputationSchema;
    }
}
exports.UserReputationStore = UserReputationStore;
//# sourceMappingURL=user_reputation.js.map