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

  @Prop()
  date: Date;
}

export const BbkSchema = SchemaFactory.createForClass(Bbk);