import { Injectable } from '@nestjs/common';
import { CreateLinkVl06ZapiskiDto } from './dto/create-link-vl06-zapiski.dto';
import { UpdateLinkVl06ZapiskiDto } from './dto/update-link-vl06-zapiski.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkVl06Zapiski } from './entities/link-vl06-zapiski.entity';
import { Repository } from 'typeorm';
import { Vl06Service } from 'src/vl06/vl06.service';

@Injectable()
export class LinkVl06ZapiskiService {
  constructor(
    @InjectRepository(LinkVl06Zapiski)
    private tableZapiskiRepository: Repository<LinkVl06Zapiski>,
    private vl06Service: Vl06Service,
  ) {}

  async create(createLinkVl06ZapiskiDto: any) {
    console.log('createLinkVl06ZapiskiDto', createLinkVl06ZapiskiDto);

    if (!Array.isArray(createLinkVl06ZapiskiDto)) {
      throw new Error('Data must be an array');
    }

    const newLinks = createLinkVl06ZapiskiDto.map(({ vl06, zapiski }) => {
      if (!vl06 || !zapiski) {
        throw new Error('Each entry must have vl06 and zapiski');
      }
      return this.tableZapiskiRepository.create({ vl06, zapiski });
    });

    return await this.tableZapiskiRepository.save(newLinks);
  }

  async findAll() {
    return await this.tableZapiskiRepository.find({
      relations: ['vl06', 'zapiski'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} linkVl06Zapiski`;
  }

  update(id: number, updateLinkVl06ZapiskiDto: UpdateLinkVl06ZapiskiDto) {
    return `This action updates a #${id} linkVl06Zapiski`;
  }

  remove(id: number) {
    return `This action removes a #${id} linkVl06Zapiski`;
  }
}
