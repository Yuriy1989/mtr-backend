import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MtrListService } from './mtr-list.service';
import { CreateMtrListDto } from './dto/create-mtr-list.dto';
import { UpdateMtrListDto } from './dto/update-mtr-list.dto';

@Controller('mtr-list')
export class MtrListController {
  constructor(private readonly mtrListService: MtrListService) {}

  @Post()
  create(@Body() createMtrListDto: any) {
    return this.mtrListService.create(createMtrListDto);
  }

  @Get()
  findAll() {
    return this.mtrListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mtrListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMtrListDto: UpdateMtrListDto) {
    return this.mtrListService.update(+id, updateMtrListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mtrListService.remove(+id);
  }
}
