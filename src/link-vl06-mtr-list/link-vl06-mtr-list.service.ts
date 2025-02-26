import { Injectable } from '@nestjs/common';
import { CreateLinkVl06MtrListDto } from './dto/create-link-vl06-mtr-list.dto';
import { UpdateLinkVl06MtrListDto } from './dto/update-link-vl06-mtr-list.dto';

@Injectable()
export class LinkVl06MtrListService {
  create(createLinkVl06MtrListDto: CreateLinkVl06MtrListDto) {
    return 'This action adds a new linkVl06MtrList';
  }

  findAll() {
    return `This action returns all linkVl06MtrList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} linkVl06MtrList`;
  }

  update(id: number, updateLinkVl06MtrListDto: UpdateLinkVl06MtrListDto) {
    return `This action updates a #${id} linkVl06MtrList`;
  }

  remove(id: number) {
    return `This action removes a #${id} linkVl06MtrList`;
  }
}
