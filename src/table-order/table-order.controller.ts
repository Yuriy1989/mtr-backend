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
    console.log(createTableOrderDto);
    return this.tableOrderService.create(createTableOrderDto);
  }

  @Get()
  findAll() {
    return this.tableOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tableOrderService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTableOrderDto: UpdateTableOrderDto,
  ) {
    return this.tableOrderService.update(+id, updateTableOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableOrderService.remove(+id);
  }
}
