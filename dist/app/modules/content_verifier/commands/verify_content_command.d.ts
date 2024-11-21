import { Modules, StateMachine } from 'klayr-sdk';
interface Params {
    hash: string;
}
export declare const verifyContentSchema: {
    $id: string;
    type: string;
    required: string[];
    properties: {
        hash: {
            dataType: string;
            fieldNumber: number;
        };
    };
};
export declare class VerifyContentCommand extends Modules.BaseCommand {
    schema: {
        $id: string;
        type: string;
        required: string[];
        properties: {
            hash: {
                dataType: string;
                fieldNumber: number;
            };
        };
    };
    verify(context: StateMachine.CommandVerifyContext<Params>): Promise<StateMachine.VerificationResult>;
    execute(context: StateMachine.CommandExecuteContext<Params>): Promise<void>;
}
export {};
