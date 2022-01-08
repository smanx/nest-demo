"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const operators_2 = require("rxjs/operators");
const model_log_1 = require("../model/model.log");
const store_1 = require("./store");
let TransformInterceptor = class TransformInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_2.catchError)(err => (0, rxjs_1.throwError)(new common_1.BadGatewayException()))).pipe((0, operators_1.map)(data => {
            let [req, res, next] = context['args'];
            (0, model_log_1.ModelLogAdd)(data, req, res);
            let id = `id_${new Date().getTime()}_${parseInt((Math.random() * 10000).toString())}`;
            store_1.default.LOG.addRes({ data, req, res, id });
            return data;
        }));
    }
};
TransformInterceptor = __decorate([
    (0, common_1.Injectable)()
], TransformInterceptor);
exports.TransformInterceptor = TransformInterceptor;
//# sourceMappingURL=transform.interceptor.js.map