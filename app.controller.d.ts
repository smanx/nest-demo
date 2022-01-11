import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    log2(query: any): object;
    getStore(): object;
    dysp(query: any, body: any, param: any): object;
}
