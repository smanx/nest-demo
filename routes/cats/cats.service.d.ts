import { Model } from 'mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { CreateCatDto } from './dto/cat.dto';
export declare class CatsService {
    private catModel;
    constructor(catModel: Model<CatDocument>);
    create(createCatDto: CreateCatDto): Promise<Cat>;
    findAll(): Promise<Cat[]>;
    createAny(): Promise<Cat>;
}
