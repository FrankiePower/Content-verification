import { TransactionSignCommand } from 'klayr-commander';
import { Application, Types } from 'klayr-sdk';
type SignFlags = typeof TransactionSignCommand.flags & {
    [key: string]: Record<string, unknown>;
};
export declare class SignCommand extends TransactionSignCommand {
    static flags: SignFlags;
    static args: {
        name: string;
        required: boolean;
        description: string;
    }[];
    getApplication(config: Types.PartialApplicationConfig): Application;
}
export {};
