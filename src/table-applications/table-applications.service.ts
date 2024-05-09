import { Injectable } from '@nestjs/common';
import { CreateTableApplicationDto } from './dto/create-table-application.dto';
import { UpdateTableApplicationDto } from './dto/update-table-application.dto';

@Injectable()
export class TableApplicationsService {
  create(createTableApplicationDto: CreateTableApplicationDto) {
    return 'This action adds a new tableApplication';
  }

  findAll() {
    return `This action returns all tableApplications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tableApplication`;
  }

  update(id: number, updateTableApplicationDto: UpdateTableApplicationDto) {
    return `This action updates a #${id} tableApplication`;
  }

  remove(id: number) {
    return `This action removes a #${id} tableApplication`;
  }
}
