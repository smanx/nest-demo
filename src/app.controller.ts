import { Controller, Get, Post, Param, Request, UseInterceptors, Query, Body } from '@nestjs/common';

import { AppService } from './app.service';
import Store from './common/store';
import { ModelLog } from './model/model.log';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('log')
  // async logloglog(@Query() query): Promise<Object> {
  //   let list = await ModelLog.find().
  //     limit(query.limit || 10).
  //     sort({ creatAt: -1 }).
  //     exec();
  //   return list.map(item => {
  //     try {
  //       item.resObj = JSON.parse(item.resText)
  //       item.resText = 'resObj'
  //     } catch (error) { }

  //     return item
  //   });
  // }

  @Get('log2')
  log2(@Query() query): object {
    let reqs = Store.LOG.reqs.slice(0, query.limit || 10)
    console.log('reqs', reqs)
    return [...reqs]
  }

  @Get('store')
  getStore(): object {
    return Store.state;
  }

  @Post('dysp')
  dysp(@Query() query, @Body() body, @Param() param,): object {
    return { a: 1 };
  }

  // @Get(':id')
  // getHello2(@Param() params): string {
  //   return JSON.stringify(params);
  // }
}
