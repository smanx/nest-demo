"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class State {
}
class Store {
}
Store.state = {
    config: {
        mongoose: {
            url: 'mongodb+srv://zc:cc@cluster0.ou5mi.mongodb.net/nest?retryWrites=true&w=majority'
        }
    }
};
Store.LOG = {
    reqMax: 10000,
    size: 1024 * 1024,
    reqCont: 0,
    reqs: [],
    addReq: function ({ req, res, id }) {
        this.reqCont++;
        let reqNew = ['hostname', 'headers', 'ip', 'ips', 'query', 'originalUrl'].reduce((obj, key) => {
            obj[key] = req[key];
            return obj;
        }, {});
        this.reqs.splice(0, this.reqs.length >= this.reqMax ? 1 : 0, { req: reqNew, id, time: new Date().toLocaleString() });
    },
    addRes: function ({ req, res, id, data }) {
        let req2 = this.reqs.find(req2 => req2.id == id);
        console.log('addRes===>', this.reqs.length, data.length);
        let length = (typeof data == 'string' ? data : JSON.stringify(data)).length;
        if (length > this.size) {
            data = 'length=' + length + '>' + this.size;
        }
        if (req2) {
            req2.res = {
                headers: res.getHeaders(),
                data: data,
                time: new Date()
            };
        }
        else {
            this.addReq({ req, res, id });
            this.addRes({ req, res, id, data });
        }
    },
    clear: function () {
        this.reqs = [];
        return this;
    }
};
exports.default = Store;
//# sourceMappingURL=store.js.map