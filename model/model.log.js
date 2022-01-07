"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelLogAdd = exports.ModelLog = exports.log = void 0;
const store_1 = require("../common/store");
const mongoose = require('mongoose');
mongoose.connect(store_1.default.state.config.mongoose.url);
exports.log = {
    name: String,
    creatAt: Date,
    other: Object,
    ip: String,
    hostname: String,
    headers: Object,
    resText: String,
    resObj: Object,
};
const logKeys = Object.keys(exports.log);
exports.ModelLog = mongoose.model('Log', exports.log);
function ModelLogAdd(data, req, res) {
    let resText = typeof data == 'string' ? data : JSON.stringify(data);
    if (resText.length > 100 * 1024) {
        resText = 'resText.length=' + resText.length;
    }
    return new exports.ModelLog(Object.assign(Object.assign({}, logKeys.reduce((obj, key) => {
        if (req[key])
            obj[key] = req[key];
        return obj;
    }, {})), { resText, creatAt: new Date(), other: {} })).save();
}
exports.ModelLogAdd = ModelLogAdd;
//# sourceMappingURL=model.log.js.map