/* bbks.controller.ts */

import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateBbkDto, UpdateBbkDto, ListAllEntities } from './dto/bbk.dto';

import { BbksService } from './bbks.service';

import { Bbk } from './schemas/bbk.schema';

@Controller('bbks')
export class BbksController {
    constructor(private readonly bbksService: BbksService) { }

    @Post()
    create(@Body() createBbkDto: CreateBbkDto) {
        return 'This action adds a new bbk';
    }

    @Get()
    findAll(@Query() query: ListAllEntities) {
        return `This action returns all bbks (limit: ${query.limit} items)`;
    }

    @Get('creatAny')
    async creatAny(@Query() query: ListAllEntities) {
        let res: Bbk = await this.bbksService.createAny()
        return res;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} bbk`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateBbkDto: UpdateBbkDto) {
        return `This action updates a #${id} bbk`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} bbk`;
    }
}
