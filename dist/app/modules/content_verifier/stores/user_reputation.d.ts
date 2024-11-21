import { Modules } from 'klayr-sdk';
export interface UserReputation {
    userId: string;
    totalSubmissions: number;
    verifiedSubmissions: number;
}
export declare const UserReputationSchema: {
    $id: string;
    type: string;
    required: string[];
    properties: {
        userId: {
            dataType: string;
            fieldNumber: number;
        };
        totalSubmissions: {
            dataType: string;
            fieldNumber: number;
        };
        verifiedSubmissions: {
            dataType: string;
            fieldNumber: number;
        };
    };
};
export declare class UserReputationStore extends Modules.BaseStore<UserReputation> {
    schema: {
        $id: string;
        type: string;
        required: string[];
        properties: {
            userId: {
                dataType: string;
                fieldNumber: number;
            };
            totalSubmissions: {
                dataType: string;
                fieldNumber: number;
            };
            verifiedSubmissions: {
                dataType: string;
                fieldNumber: number;
            };
        };
    };
}
