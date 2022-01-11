/* bbks.controller.ts */

import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateBbkDto, UpdateBbkDto, ListAllEntities } from './dto/bbk.dto';

import { BbksService } from './bbks.service';

import { Bbk } from './schemas/bbk.schema';

@Controller('bbks')
export class BbksController {
    constructor(private readonly bbksService: BbksService) { }

    @Get()
    create() {
        return this.bbksService.getHello()
    }
}
