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

  async create(createZapiskiDto: any) {
    console.log('createZapiskiDto', createZapiskiDto);
    const newZapiski = this.tableZapiskiRepository.create(createZapiskiDto);
    return await this.tableZapiskiRepository.save(newZapiski);
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
