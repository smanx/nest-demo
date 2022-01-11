import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
const request = require('request')

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  getHello(): string {
    return 'Hello World!';
  }
  getHello2(): string {
    return 'Hello World! 222';
  }
  @Cron('* * * * * *')
  handleCron() {
    requestrequest()
  }
}


// requestrequest()
function requestrequest() {
  let url = 'https://nest-demo-two.vercel.app/log2?limit=1'
  // let url = 'http://localhost:3000/log2?limit=1'
  request(url, function (error, response, data) {
    Logger.log(data)
    // requestrequest()
  });
}