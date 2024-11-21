"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentVerifierModule = void 0;
const klayr_sdk_1 = require("klayr-sdk");
const create_content_command_1 = require("./commands/create_content_command");
const endpoint_1 = require("./endpoint");
const method_1 = require("./method");
const content_1 = require("./stores/content");
const stats_1 = require("./stores/stats");
const user_reputation_1 = require("./stores/user_reputation");
const verify_content_command_1 = require("./commands/verify_content_command");
class ContentVerifierModule extends klayr_sdk_1.Modules.BaseModule {
    get name() {
        return ContentVerifierModule.MODULE_NAME;
    }
    constructor() {
        super();
        this.id = ContentVerifierModule.MODULE_ID;
        this.endpoint = new endpoint_1.ContentVerifierEndpoint(this.stores, this.offchainStores);
        this.method = new method_1.ContentVerifierMethod(this.stores, this.events);
        this.commands = [
            new create_content_command_1.CreateContentCommand(this.stores, this.events),
            new verify_content_command_1.VerifyContentCommand(this.stores, this.events)
        ];
        this.stores.register(content_1.ContentStore, new content_1.ContentStore(this.name, 0));
        this.stores.register(stats_1.StatsStore, new stats_1.StatsStore(this.name, 1));
        this.stores.register(user_reputation_1.UserReputationStore, new user_reputation_1.UserReputationStore(this.name, 2));
        this.maxContentLength = 1000;
        this.minReputationForVerification = 0.5;
    }
    metadata() {
        return {
            ...this.baseMetadata(),
            endpoints: [
                {
                    name: 'getContent',
                    request: this.getContentSchema(),
                    response: this.getContentResponseSchema(),
                },
                {
                    name: 'getStats',
                    request: this.getStatsSchema(),
                    response: this.getStatsResponseSchema(),
                },
                {
                    name: 'verifyContent',
                    request: this.verifyContentSchema(),
                    response: this.verifyContentResponseSchema(),
                },
                {
                    name: 'getReputation',
                    request: this.getReputationSchema(),
                    response: this.getReputationResponseSchema(),
                },
            ],
            assets: [],
            stores: [],
        };
    }
    getContentSchema() {
        return {
            $id: 'contentVerifier/getContent',
            type: 'object',
            properties: {
                hash: {
                    dataType: 'string',
                    fieldNumber: 1,
                },
            },
            required: ['hash'],
        };
    }
    getStatsSchema() {
        return {
            $id: 'contentVerifier/getStats',
            type: 'object',
            properties: {},
        };
    }
    verifyContentSchema() {
        return {
            $id: 'contentVerifier/verifyContent',
            type: 'object',
            properties: {
                hash: {
                    dataType: 'string',
                    fieldNumber: 1,
                },
            },
            required: ['hash'],
        };
    }
    getContentResponseSchema() {
        return {
            $id: 'contentVerifier/getContentResponse',
            type: 'object',
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
    }
    getStatsResponseSchema() {
        return {
            $id: 'contentVerifier/getStatsResponse',
            type: 'object',
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
    }
    verifyContentResponseSchema() {
        return {
            $id: 'contentVerifier/verifyContentResponse',
            type: 'object',
            properties: {
                success: {
                    dataType: 'boolean',
                    fieldNumber: 1,
                },
            },
        };
    }
    getReputationSchema() {
        return {
            $id: '/contentVerifier/getReputation',
            type: 'object',
            required: ['userId'],
            properties: {
                userId: {
                    dataType: 'string',
                    fieldNumber: 1,
                },
            },
        };
    }
    getReputationResponseSchema() {
        return {
            $id: '/contentVerifier/getReputationResponse',
            type: 'object',
            required: ['userId', 'reputation', 'totalSubmissions', 'verifiedSubmissions'],
            properties: {
                userId: {
                    dataType: 'string',
                    fieldNumber: 1,
                },
                reputation: {
                    dataType: 'float',
                    fieldNumber: 2,
                },
                totalSubmissions: {
                    dataType: 'uint32',
                    fieldNumber: 3,
                },
                verifiedSubmissions: {
                    dataType: 'uint32',
                    fieldNumber: 4,
                },
            },
        };
    }
    async init(args) {
        var _a, _b;
        const { moduleConfig } = args;
        if (moduleConfig) {
            this.maxContentLength = (_a = moduleConfig.maxContentLength) !== null && _a !== void 0 ? _a : this.maxContentLength;
            this.minReputationForVerification = (_b = moduleConfig.minReputationForVerification) !== null && _b !== void 0 ? _b : this.minReputationForVerification;
        }
    }
    async verifyTransaction(_context) {
        return { status: klayr_sdk_1.StateMachine.VerifyStatus.OK };
    }
}
ContentVerifierModule.MODULE_NAME = 'contentVerifier';
ContentVerifierModule.MODULE_ID = 1000;
exports.ContentVerifierModule = ContentVerifierModule;
//# sourceMappingURL=module.js.map