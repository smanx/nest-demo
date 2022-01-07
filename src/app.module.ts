import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './routes/cats/cats.module';
import { BbksModule } from './routes/bbk/bbks.module';
import Store from './common/store';

@Module({
  imports: [
    MongooseModule.forRoot(Store.state.config.mongoose.url),
    CatsModule,
    BbksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
