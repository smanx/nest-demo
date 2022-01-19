"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AppService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const store_1 = require("./common/store");
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
    handleCron() {
        store_1.default.state.words.splice(0, store_1.default.state.words.length >= 10000 ? 1 : 0, new Date().toLocaleString());
    }
};
__decorate([
    (0, schedule_1.Cron)('* * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppService.prototype, "handleCron", null);
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