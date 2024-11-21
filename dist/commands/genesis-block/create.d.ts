import { BaseGenesisBlockCommand } from 'klayr-commander';
import { Application, Types } from 'klayr-sdk';
export declare class GenesisBlockCommand extends BaseGenesisBlockCommand {
    getApplication(config: Types.PartialApplicationConfig): Application;
    getApplicationConfigDir(): string;
}
