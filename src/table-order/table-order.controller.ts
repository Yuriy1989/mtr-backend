import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TableOrderService } from './table-order.service';
import { CreateTableOrderDto } from './dto/create-table-order.dto';
import { UpdateTableOrderDto } from './dto/update-table-order.dto';

@Controller('table-order')
export class TableOrderController {
  constructor(private readonly tableOrderService: TableOrderService) {}

  @Post()
  create(@Body() createTableOrderDto: any) {
    return this.tableOrderService.create(createTableOrderDto);
  }

  @Get()
  findAll() {
    return this.tableOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.tableOrderService.findOne(+id);
  }

  @Patch()
  update(@Body() updateTableOrderDto: any) {
    return this.tableOrderService.update(updateTableOrderDto);
  }

  @Delete()
  remove(@Body() id: any) {
    return this.tableOrderService.remove(+id.id);
  }
}
