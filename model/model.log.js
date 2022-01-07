"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelLogAdd = exports.ModelLog = void 0;
const store_1 = require("../common/store");
const mongoose = require('mongoose');
mongoose.connect(store_1.default.state.config.mongoose.url);
exports.ModelLog = mongoose.model('Log', {
    name: String,
    creatAt: Date,
    other: Object
});
function ModelLogAdd(data) {
    return new exports.ModelLog(Object.assign({ creatAt: new Date() }, data)).save();
}
exports.ModelLogAdd = ModelLogAdd;
//# sourceMappingURL=model.log.js.map