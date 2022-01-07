import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(function (req, res, next) {
    // console.log('==============>', arguments)
    next()
  })
  await app.listen(3000);
}
bootstrap();
