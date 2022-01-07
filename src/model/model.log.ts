import Store from "src/common/store";
const mongoose = require('mongoose');
mongoose.connect(Store.state.config.mongoose.url)



export const log = {
    name: String,
    creatAt: Date,
    other: Object,
    ip: String,
    hostname: String,
    headers: Object,
    resText: String,
    resObj: Object,
}

const logKeys = Object.keys(log)
export const ModelLog = mongoose.model('Log', log)

export function ModelLogAdd(data, req, res) {
    let resText = typeof data == 'string' ? data : JSON.stringify(data)
    if (resText.length > 100 * 1024) {
        resText = 'resText.length=' + resText.length
    }
    return new ModelLog({
        ...logKeys.reduce((obj, key) => {
            if (req[key]) obj[key] = req[key]
            return obj
        }, {}),
        resText,
        creatAt: new Date(),
        other: {}
    }).save();
}