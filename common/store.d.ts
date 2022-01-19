declare class Store {
    static state: {
        config: {
            mongoose: {
                url: string;
            };
        };
        words: any[];
    };
    static LOG: {
        reqMax: number;
        size: number;
        reqCont: number;
        reqs: any[];
        startTime: Date;
        addReq: ({ req, res, id }: {
            req: any;
            res: any;
            id: any;
        }) => void;
        addRes: ({ req, res, id, data }: {
            req: any;
            res: any;
            id: any;
            data: any;
        }) => void;
        clear: () => any;
    };
}
export default Store;
