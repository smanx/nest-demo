import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class AppService {
  constructor(@InjectModel('Cat') private catModel: Model<CatDocument>) { }
  getHello(): string {
    this.create(new CreateCatDto())
    return 'Hello World!';
  }

  @Cron('0 * * * * *')
  handleCron() {
    console.debug('Called when the current second is' + new Date().getTime());
  }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel({ name: 'name1', breed: 3 });
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

}

@Injectable()
export class AppService2 {
  getHello(): string {
    return JSON.stringify({ a: 1, b: 2 });
  }
}
