"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentStore = exports.ContentEntrySchema = void 0;
const klayr_sdk_1 = require("klayr-sdk");
exports.ContentEntrySchema = {
    $id: '/contentVerifier/contentEntry',
    type: 'object',
    required: ['userId', 'timestamp', 'verified'],
    properties: {
        userId: {
            dataType: 'string',
            fieldNumber: 1,
        },
        timestamp: {
            dataType: 'uint32',
            fieldNumber: 2,
        },
        verified: {
            dataType: 'boolean',
            fieldNumber: 3,
        },
    },
};
class ContentStore extends klayr_sdk_1.Modules.BaseStore {
    constructor() {
        super(...arguments);
        this.schema = exports.ContentEntrySchema;
    }
}
exports.ContentStore = ContentStore;
//# sourceMappingURL=content.js.map