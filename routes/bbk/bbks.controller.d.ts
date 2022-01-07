import { CreateBbkDto, ListAllEntities } from './dto/bbk.dto';
import { BbksService } from './bbks.service';
import { Bbk } from './schemas/bbk.schema';
export declare class BbksController {
    private readonly bbksService;
    constructor(bbksService: BbksService);
    create(createBbkDto: CreateBbkDto): string;
    findAll(query: ListAllEntities): string;
    creatAny(query: ListAllEntities): Promise<Bbk>;
}
