import { Document } from 'mongoose';
export declare type BbkDocument = Bbk & Document;
export declare class Bbk extends Document {
    name: string;
    age: number;
    breed: string;
    limit: number;
    date: Date;
}
export declare const BbkSchema: import("mongoose").Schema<Bbk, import("mongoose").Model<Bbk, any, any, any>, any, any>;
