import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop()
  limit: number;
}

export const CatSchema = SchemaFactory.createForClass(Cat);


import * as mongoose from 'mongoose';

export const CatSchema2 = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  limit: Number,
});
