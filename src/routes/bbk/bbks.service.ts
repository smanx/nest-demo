import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bbk, BbkDocument } from './schemas/bbk.schema';
import { CreateBbkDto } from './dto/bbk.dto';

@Injectable()
export class BbksService {
  constructor(@InjectModel('Bbk') private bbkModel: Model<BbkDocument>) {}

  async create(createBbkDto: CreateBbkDto): Promise<Bbk> {
    const createdBbk = new this.bbkModel(createBbkDto);
    return createdBbk.save();
  }

  async findAll(): Promise<Bbk[]> {
    return this.bbkModel.find().exec();
  }

  async createAny(): Promise<Bbk> {
    let createBbkDto = new CreateBbkDto()
    const createdBbk = new this.bbkModel(createBbkDto);
    return createdBbk.save();
  }
}
