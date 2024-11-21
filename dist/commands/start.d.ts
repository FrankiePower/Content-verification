import { FlagInput } from '@oclif/core/lib/interfaces';
import { BaseStartCommand } from 'klayr-commander';
import { Application, Types } from 'klayr-sdk';
type StartFlags = typeof BaseStartCommand.flags & FlagInput<any>;
export declare class StartCommand extends BaseStartCommand {
    static flags: StartFlags;
    getApplication(config: Types.PartialApplicationConfig): Promise<Application>;
    getApplicationConfigDir(): string;
}
export {};
