import { Modules, StateMachine } from 'klayr-sdk';
interface Params {
    hash: string;
    userId: string;
    timestamp: number;
}
export declare const createContentSchema: {
    $id: string;
    type: string;
    required: string[];
    properties: {
        hash: {
            dataType: string;
            fieldNumber: number;
        };
        userId: {
            dataType: string;
            fieldNumber: number;
        };
        timestamp: {
            dataType: string;
            fieldNumber: number;
        };
    };
};
export declare class CreateContentCommand extends Modules.BaseCommand {
    schema: {
        $id: string;
        type: string;
        required: string[];
        properties: {
            hash: {
                dataType: string;
                fieldNumber: number;
            };
            userId: {
                dataType: string;
                fieldNumber: number;
            };
            timestamp: {
                dataType: string;
                fieldNumber: number;
            };
        };
    };
    verify(_context: StateMachine.CommandVerifyContext<Params>): Promise<StateMachine.VerificationResult>;
    execute(context: StateMachine.CommandExecuteContext<Params>): Promise<void>;
}
export {};
