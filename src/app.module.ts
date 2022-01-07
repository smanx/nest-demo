import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://zc:cc@cluster0.ou5mi.mongodb.net/nest?retryWrites=true&w=majority'),
    CatsModule,
    LogsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
