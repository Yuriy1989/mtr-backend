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
    // return await this.tableOrderRepository.save(createTableOrderDto);
    const insertWithRepositoryQueryBuilder = await this.tableOrderRepository
      .createQueryBuilder()
      .insert()
      .into(TableOrder)
      .values(createTableOrderDto)
      .execute();
    return insertWithRepositoryQueryBuilder;
  }

  async findAll() {
    const postWithRepositoryQueryBuilder = await this.tableOrderRepository
      .createQueryBuilder('TableOrder')
      .getMany();
    return postWithRepositoryQueryBuilder;
  }

  async findOne(id: number) {
    console.log('id service', id);
    const postWithRepositoryQueryBuilder = await this.tableOrderRepository
      .createQueryBuilder('TableOrder')
      .where('TableOrder.order = :id', { id })
      .getMany();
    return postWithRepositoryQueryBuilder;
  }

  async update(updateTableOrderDto: any) {
    const updateWithRepositoryQueryBuilder = await this.tableOrderRepository
      .createQueryBuilder()
      .update(TableOrder)
      .set(updateTableOrderDto)
      .where('id = :id', { id: updateTableOrderDto.id })
      .execute();
    return updateWithRepositoryQueryBuilder;
  }

  async remove(id: number) {
    return await this.tableOrderRepository.delete({ id });
  }
}
