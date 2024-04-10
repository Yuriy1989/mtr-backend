import { Injectable } from '@nestjs/common';
import { CreateTableOrderDto } from './dto/create-table-order.dto';
import { UpdateTableOrderDto } from './dto/update-table-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TableOrder } from './entities/table-order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TableOrderService {
  constructor(
    @InjectRepository(TableOrder)
    private tableOrderRepository: Repository<TableOrder>,
  ) {}

  async create(createTableOrderDto: any) {
    return await this.tableOrderRepository.save(createTableOrderDto);
  }

  findAll() {
    return `This action returns all tableOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tableOrder`;
  }

  update(id: number, updateTableOrderDto: UpdateTableOrderDto) {
    return `This action updates a #${id} tableOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} tableOrder`;
  }
}
