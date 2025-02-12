import { Injectable } from '@nestjs/common';
import { CreateZapiskiDto } from './dto/create-zapiski.dto';
import { UpdateZapiskiDto } from './dto/update-zapiski.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Zapiski } from './entities/zapiski.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ZapiskiService {
  constructor(
    @InjectRepository(Zapiski)
    private tableZapiskiRepository: Repository<Zapiski>,
  ) {}

  create(createZapiskiDto: any) {
    return 'This action adds a new zapiski';
  }

  findAll() {
    return `This action returns all zapiski`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zapiski`;
  }

  update(id: number, updateZapiskiDto: UpdateZapiskiDto) {
    return `This action updates a #${id} zapiski`;
  }

  remove(id: number) {
    return `This action removes a #${id} zapiski`;
  }
}
