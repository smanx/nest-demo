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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BbksController = void 0;
const common_1 = require("@nestjs/common");
const bbk_dto_1 = require("./dto/bbk.dto");
const bbks_service_1 = require("./bbks.service");
let BbksController = class BbksController {
    constructor(bbksService) {
        this.bbksService = bbksService;
    }
    create(createBbkDto) {
        return 'This action adds a new bbk';
    }
    findAll(query) {
        return `This action returns all bbks (limit: ${query.limit} items)`;
    }
    async creatAny(query) {
        let res = await this.bbksService.createAny();
        return res;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bbk_dto_1.CreateBbkDto]),
    __metadata("design:returntype", void 0)
], BbksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bbk_dto_1.ListAllEntities]),
    __metadata("design:returntype", void 0)
], BbksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('creatAny'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bbk_dto_1.ListAllEntities]),
    __metadata("design:returntype", Promise)
], BbksController.prototype, "creatAny", null);
BbksController = __decorate([
    (0, common_1.Controller)('bbks'),
    __metadata("design:paramtypes", [bbks_service_1.BbksService])
], BbksController);
exports.BbksController = BbksController;
//# sourceMappingURL=bbks.controller.js.map