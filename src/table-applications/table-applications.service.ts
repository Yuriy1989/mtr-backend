import { Injectable } from '@nestjs/common';
import { CreateTableApplicationDto } from './dto/create-table-application.dto';
import { UpdateTableApplicationDto } from './dto/update-table-application.dto';
import { TableApplication } from './entities/table-application.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TableApplicationsService {
  constructor(
    @InjectRepository(TableApplication)
    private tableApplicationRepository: Repository<TableApplication>,
  ) {}

  async create(createTableApplicationDto: any) {
    const insertWithRepositoryQueryBuilder =
      await this.tableApplicationRepository
        .createQueryBuilder()
        .insert()
        .into(TableApplication)
        .values(createTableApplicationDto)
        .execute();
    return insertWithRepositoryQueryBuilder;
  }

  async findAll() {
    const postWithRepositoryQueryBuilder = await this.tableApplicationRepository
      .createQueryBuilder('TableApplication')
      .leftJoinAndSelect('TableApplication.tableOrder', 'tableOrder')
      .orderBy('TableApplication.id', 'ASC')
      .getMany();
    return postWithRepositoryQueryBuilder;
  }

  async findOne(id: number) {
    console.log('id service', id);
    const postWithRepositoryQueryBuilder = await this.tableApplicationRepository
      .createQueryBuilder()
      .leftJoinAndSelect('TableApplication.tableOrder', 'tableOrder')
      .where('TableApplication.application = :id', { id })
      .getMany();
    return postWithRepositoryQueryBuilder;
  }

  async update(updateTableApplicationDto: any) {
    const updateWithRepositoryQueryBuilder =
      await this.tableApplicationRepository
        .createQueryBuilder('TableApplication')
        .update(TableApplication)
        .set(updateTableApplicationDto)
        .where('id = :id', { id: updateTableApplicationDto.id })
        .execute();
    return updateWithRepositoryQueryBuilder;
  }

  async remove(id: number) {
    return await this.tableApplicationRepository.delete({ id });
  }
}
