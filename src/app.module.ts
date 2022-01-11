import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './routes/cats/cats.module';
import Store from './common/store';
const request = require('request')
import { ScheduleModule } from '@nestjs/schedule';
import { BbksModule } from './routes/bbk/bbks.module';
@Module({
  imports: [
    // MongooseModule.forRoot(Store.state.config.mongoose.url),
    CatsModule,
    BbksModule,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(function logger(req, res, next) {
        var url = req.query.url || 'http://localhost:3000'
        req.pipe(request(url)).pipe(res);
        // next();
      })
      .forRoutes('proxy');
  }
}