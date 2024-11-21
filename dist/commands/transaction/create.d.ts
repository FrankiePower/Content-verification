import { TransactionCreateCommand } from 'klayr-commander';
import { Application, Types } from 'klayr-sdk';
type CreateFlags = typeof TransactionCreateCommand.flags & {
    [key: string]: Record<string, unknown>;
};
export declare class CreateCommand extends TransactionCreateCommand {
    static flags: CreateFlags;
    static args: {
        name: string;
        required: boolean;
        description: string;
    }[];
    getApplication(config: Types.PartialApplicationConfig): Application;
}
export {};
