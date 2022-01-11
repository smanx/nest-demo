import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BbksController } from './bbks.controller';
import { BbksService } from './bbks.service';
import { Bbk, BbkSchema } from './schemas/bbk.schema';

@Module({
  // imports: [MongooseModule.forFeature([{ name: Bbk.name, schema: BbkSchema }])],
  controllers: [BbksController],
  providers: [BbksService],
})
export class BbksModule {}
