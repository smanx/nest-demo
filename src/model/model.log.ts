import Store from "src/common/store";
const mongoose = require('mongoose');
mongoose.connect(Store.state.config.mongoose.url)
export const ModelLog = mongoose.model('Log', {
    name: String,
    creatAt: Date,
    other: Object
})

export function ModelLogAdd(data) {
    return new ModelLog({ creatAt: new Date(), ...data }).save();
}