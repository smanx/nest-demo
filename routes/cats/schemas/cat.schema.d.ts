import { Document } from 'mongoose';
export declare type CatDocument = Cat & Document;
export declare class Cat extends Document {
    name: string;
    age: number;
    breed: string;
    limit: number;
}
export declare const CatSchema: mongoose.Schema<Cat, mongoose.Model<Cat, any, any, any>, any, any>;
import * as mongoose from 'mongoose';
export declare const CatSchema2: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
