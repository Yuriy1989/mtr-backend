import { Injectable } from '@nestjs/common';
import { CreateFilialDto } from './dto/create-filial.dto';
import { UpdateFilialDto } from './dto/update-filial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Filial } from './entities/filial.entity';

@Injectable()
export class FilialsService {
  constructor(
    @InjectRepository(Filial)
    private filialRepository: Repository<Filial>,
  ) {}

  async create(createFilialDto: CreateFilialDto) {
    return await this.filialRepository.save(createFilialDto);
  }

  async findAll() {
    return await this.filialRepository.find();
  }

  async update(updateFilialDto: UpdateFilialDto) {
    const id = updateFilialDto.id;
    const data: any = {
      nameFilial: updateFilialDto.name,
    };
    return await this.filialRepository.update({ id }, data);
  }

  async remove(updateFilialDto: UpdateFilialDto) {
    const id = updateFilialDto[0].id;
    return await this.filialRepository.delete(id);
  }
}
