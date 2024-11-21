import { Modules } from 'klayr-sdk';
export interface ContentEntry {
    userId: string;
    timestamp: number;
    verified: boolean;
}
export declare const ContentEntrySchema: {
    $id: string;
    type: string;
    required: string[];
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
export declare class ContentStore extends Modules.BaseStore<ContentEntry> {
    schema: {
        $id: string;
        type: string;
        required: string[];
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
}
