import { Injectable } from '@nestjs/common';
// import { CreateBasicunitDto } from './dto/create-basicunit.dto';
// import { UpdateBasicunitDto } from './dto/update-basicunit.dto';

@Injectable()
export class BasicunitService {
  // create(createBasicunitDto: CreateBasicunitDto) {
  //   return 'This action adds a new basicunit';
  // }

  findAll() {
    return `This action returns all basicunit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basicunit`;
  }

  // update(id: number, updateBasicunitDto: UpdateBasicunitDto) {
  //   return `This action updates a #${id} basicunit`;
  // }

  remove(id: number) {
    return `This action removes a #${id} basicunit`;
  }
}
