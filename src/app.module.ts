import { Module } from '@nestjs/common';
import { AppController, AppController2 } from './app.controller';
import { AppService, AppService2 } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';

import { APP_INTERCEPTOR } from '@nestjs/core';

import { Interceptor } from './interceptor';

import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])
  ],
  controllers: [AppController, AppController2],
  providers: [AppService, AppService2, {
    provide: APP_INTERCEPTOR,
    useClass: Interceptor,
  },],
})
export class AppModule { }
