import { NestFactory } from '@nestjs/core';
// import { TransformInterceptor } from './common/transform.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
}
bootstrap();
