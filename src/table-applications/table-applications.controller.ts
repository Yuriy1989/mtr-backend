import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TableApplicationsService } from './table-applications.service';
import { CreateTableApplicationDto } from './dto/create-table-application.dto';
import { UpdateTableApplicationDto } from './dto/update-table-application.dto';

@Controller('table-applications')
export class TableApplicationsController {
  constructor(private readonly tableApplicationsService: TableApplicationsService) {}

  @Post()
  create(@Body() createTableApplicationDto: CreateTableApplicationDto) {
    return this.tableApplicationsService.create(createTableApplicationDto);
  }

  @Get()
  findAll() {
    return this.tableApplicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tableApplicationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTableApplicationDto: UpdateTableApplicationDto) {
    return this.tableApplicationsService.update(+id, updateTableApplicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableApplicationsService.remove(+id);
  }
}
