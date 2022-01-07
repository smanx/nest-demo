import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    logloglog(query: any): Promise<Object>;
    getStore(): object;
    dysp(query: any, body: any, param: any): object;
}
