import { Controller, Get, Param, Request, UseInterceptors } from '@nestjs/common';
import { AppService, AppService2 } from './app.service';
import { AppInterceptor } from './interceptor';

@Controller()
@UseInterceptors(AppInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('cats')
export class AppController2 {
  constructor(private readonly appService: AppService2) {}

  @Get()
  getHello(@Request() params): string {
    return this.appService.getHello();
  }
  @Get(':id')
  getHello2(@Param() params): string {
    return JSON.stringify(params);
  }
}
