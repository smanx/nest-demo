import { Model } from 'mongoose';
import { Bbk, BbkDocument } from './schemas/bbk.schema';
import { CreateBbkDto } from './dto/bbk.dto';
export declare class BbksService {
    private bbkModel;
    constructor(bbkModel: Model<BbkDocument>);
    create(createBbkDto: CreateBbkDto): Promise<Bbk>;
    findAll(): Promise<Bbk[]>;
    createAny(): Promise<Bbk>;
    add(obj: object): Promise<Bbk>;
}
