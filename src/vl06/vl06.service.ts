import { Injectable } from '@nestjs/common';
import { CreateVl06Dto } from './dto/create-vl06.dto';
import { UpdateVl06Dto } from './dto/update-vl06.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vl06 } from './entities/vl06.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Vl06Service {
  constructor(
    @InjectRepository(Vl06)
    private tableVL06: Repository<Vl06>,
  ) {}

  async create(createVl06Dto: any) {
    const insertWithRepositoryQueryBuilder = await this.tableVL06
      .createQueryBuilder()
      .insert()
      .into(Vl06)
      .values(createVl06Dto)
      .execute();
    return insertWithRepositoryQueryBuilder;
  }

  async findAll() {
    const postWithRepositoryQueryBuilder = await this.tableVL06
      .createQueryBuilder('Vl06')
      // .orderBy('Vl06.id', 'ASC')
      .getMany();
    return postWithRepositoryQueryBuilder;
  }

  findOne(id: any) {
    return `This action returns a #${id} vl06`;
  }

  update(id: number, updateVl06Dto: UpdateVl06Dto) {
    return `This action updates a #${id} vl06`;
  }

  remove(id: number) {
    return `This action removes a #${id} vl06`;
  }
}
