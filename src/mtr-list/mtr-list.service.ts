import { Injectable } from '@nestjs/common';
import { CreateMtrListDto } from './dto/create-mtr-list.dto';
import { UpdateMtrListDto } from './dto/update-mtr-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MtrList } from './entities/mtr-list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MtrListService {
  constructor(
    @InjectRepository(MtrList)
    private mtrList: Repository<MtrList>,
  ) {}

  async create(createMtrListDto: any) {
    const createList = await this.mtrList
      .createQueryBuilder()
      .insert()
      .into(MtrList)
      .values(createMtrListDto)
      .execute();
    return createList;
  }

  findAll() {
    return `This action returns all mtrList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mtrList`;
  }

  update(id: number, updateMtrListDto: UpdateMtrListDto) {
    return `This action updates a #${id} mtrList`;
  }

  remove(id: number) {
    return `This action removes a #${id} mtrList`;
  }
}
