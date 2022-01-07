import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BbkDocument = Bbk & Document;

@Schema()
export class Bbk extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop()
  limit: number;
}

export const BbkSchema = SchemaFactory.createForClass(Bbk);


import * as mongoose from 'mongoose';

export const BbkSchema2 = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  limit: Number,
});
