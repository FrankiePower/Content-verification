import { Modules, Types } from 'klayr-sdk';
import { ContentEntry } from './stores/content';
import { ContentStats } from './stores/stats';
export declare class ContentVerifierEndpoint extends Modules.BaseEndpoint {
    getContent(ctx: Types.ModuleEndpointContext): Promise<ContentEntry | null>;
    getStats(ctx: Types.ModuleEndpointContext): Promise<ContentStats>;
    getReputation(ctx: Types.ModuleEndpointContext): Promise<{
        userId: string;
        reputation: number;
        totalSubmissions: number;
        verifiedSubmissions: number;
    }>;
}
