import { Controller, Get, Param, Request, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('log')
  getHello3(): string {
    return 'getHello3';
  }

  // @Get(':id')
  // getHello2(@Param() params): string {
  //   return JSON.stringify(params);
  // }
}
