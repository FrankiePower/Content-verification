import { Modules } from 'klayr-sdk';
export interface ContentStats {
    totalContents: number;
    verifiedContents: number;
}
export declare const ContentStatsSchema: {
    $id: string;
    type: string;
    required: string[];
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
export declare class StatsStore extends Modules.BaseStore<ContentStats> {
    schema: {
        $id: string;
        type: string;
        required: string[];
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
}
