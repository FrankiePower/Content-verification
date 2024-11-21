import { Modules, StateMachine } from 'klayr-sdk';
import { CreateContentCommand } from "./commands/create_content_command";
import { ContentVerifierEndpoint } from './endpoint';
import { ContentVerifierMethod } from './method';
import { VerifyContentCommand } from './commands/verify_content_command';
export declare class ContentVerifierModule extends Modules.BaseModule {
    static readonly MODULE_NAME = "contentVerifier";
    static readonly MODULE_ID = 1000;
    get name(): string;
    id: number;
    endpoint: ContentVerifierEndpoint;
    method: ContentVerifierMethod;
    commands: (CreateContentCommand | VerifyContentCommand)[];
    private maxContentLength;
    private minReputationForVerification;
    constructor();
    metadata(): Modules.ModuleMetadata;
    getContentSchema(): {
        $id: string;
        type: string;
        properties: {
            hash: {
                dataType: string;
                fieldNumber: number;
            };
        };
        required: string[];
    };
    getStatsSchema(): {
        $id: string;
        type: string;
        properties: {};
    };
    verifyContentSchema(): {
        $id: string;
        type: string;
        properties: {
            hash: {
                dataType: string;
                fieldNumber: number;
            };
        };
        required: string[];
    };
    getContentResponseSchema(): {
        $id: string;
        type: string;
        properties: {
            userId: {
                dataType: string;
                fieldNumber: number;
            };
            timestamp: {
                dataType: string;
                fieldNumber: number;
            };
            verified: {
                dataType: string;
                fieldNumber: number;
            };
        };
    };
    getStatsResponseSchema(): {
        $id: string;
        type: string;
        properties: {
            totalContents: {
                dataType: string;
                fieldNumber: number;
            };
            verifiedContents: {
                dataType: string;
                fieldNumber: number;
            };
        };
    };
    verifyContentResponseSchema(): {
        $id: string;
        type: string;
        properties: {
            success: {
                dataType: string;
                fieldNumber: number;
            };
        };
    };
    getReputationSchema(): {
        $id: string;
        type: string;
        required: string[];
        properties: {
            userId: {
                dataType: string;
                fieldNumber: number;
            };
        };
    };
    getReputationResponseSchema(): {
        $id: string;
        type: string;
        required: string[];
        properties: {
            userId: {
                dataType: string;
                fieldNumber: number;
            };
            reputation: {
                dataType: string;
                fieldNumber: number;
            };
            totalSubmissions: {
                dataType: string;
                fieldNumber: number;
            };
            verifiedSubmissions: {
                dataType: string;
                fieldNumber: number;
            };
        };
    };
    init(args: Modules.ModuleInitArgs): Promise<void>;
    verifyTransaction(_context: StateMachine.TransactionVerifyContext): Promise<StateMachine.VerificationResult>;
}
