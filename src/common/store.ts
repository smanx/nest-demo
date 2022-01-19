
class State {
    public test: number
}
class Store {
    // public static state = new State()
    public static state = {
        config: {
            mongoose: {
                url: '',
                // url: 'mongodb+srv://zc:cc@cluster0.ou5mi.mongodb.net/nest?retryWrites=true&w=majority'
            }
        },
        words: []
    }

    public static LOG = {
        reqMax: 10000,
        size: 1024 * 1024,
        reqCont: 0,
        reqs: [],
        startTime: new Date(),
        addReq: function ({ req, res, id }) {
            this.reqCont++
            let reqNew = ['hostname', 'headers', 'ip', 'ips', 'query', 'originalUrl'].reduce((obj, key) => {
                obj[key] = req[key]
                return obj
            }, {})
            this.reqs.splice(0, this.reqs.length >= this.reqMax ? 1 : 0, { req: reqNew, id, time: new Date().toLocaleString() })
        },
        addRes: function ({ req, res, id, data }) {
            let req2 = this.reqs.find(req2 => req2.id == id)
            console.log('addRes===>',this.reqs.length, data.length)
            let length = (typeof data == 'string' ? data : JSON.stringify(data)).length
            if (length > this.size) {
                data = 'length=' + length + '>' + this.size
            }
            if (req2) {
                req2.res = {
                    headers: res.getHeaders(),
                    data: data,
                    time: new Date()
                }
            } else {
                this.addReq({ req, res, id })
                this.addRes({ req, res, id, data })
            }
        },
        clear: function () {
            this.reqs = []
            return this
        }
    }

}
export default Store;