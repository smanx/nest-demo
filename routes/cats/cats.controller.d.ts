import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto/cat.dto';
import { CatsService } from './cats.service';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): string;
    findAll(query: ListAllEntities): string;
    creatAny(query: ListAllEntities): Promise<any[]>;
    findOne(id: string): string;
    update(id: string, updateCatDto: UpdateCatDto): string;
    remove(id: string): string;
}
