import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bbk, BbkDocument } from './schemas/bbk.schema';
import { CreateBbkDto } from './dto/bbk.dto';

export class BbksService {
  constructor() { }

  getHello(){
    return 'hello'
  }
}
