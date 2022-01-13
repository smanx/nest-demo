"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AppService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const request = require('request');
let AppService = AppService_1 = class AppService {
    constructor() {
        this.logger = new common_1.Logger(AppService_1.name);
    }
    getHello() {
        return 'Hello World!';
    }
    getHello2() {
        return 'Hello World! 222';
    }
};
AppService = AppService_1 = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
function requestrequest() {
    let url = 'https://nest-demo-two.vercel.app/log2?limit=1';
    request(url, function (error, response, data) {
        common_1.Logger.log(data);
    });
}
//# sourceMappingURL=app.service.js.map