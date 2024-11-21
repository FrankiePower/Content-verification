import { Modules, StateMachine } from 'klayr-sdk';
import { ContentEntry } from './stores/content';
import { ContentStats } from './stores/stats';
export declare class ContentVerifierMethod extends Modules.BaseMethod {
    getContent(methodContext: StateMachine.ImmutableMethodContext, hash: string): Promise<ContentEntry | null>;
    getStats(methodContext: StateMachine.ImmutableMethodContext): Promise<ContentStats>;
    getUserReputation(methodContext: StateMachine.ImmutableMethodContext, userId: string): Promise<{
        reputation: number;
        totalSubmissions: number;
        verifiedSubmissions: number;
    }>;
}
