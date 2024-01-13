import { Injectable } from '@nestjs/common';
import { CreateDimensionDto } from './dto/create-dimension.dto';
import { UpdateDimensionDto } from './dto/update-dimension.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dimension } from './entities/dimension.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DimensionsService {
  constructor(
    @InjectRepository(Dimension)
    private dimansionRepository: Repository<Dimension>,
  ) {}

  async create(createDimensionDto: CreateDimensionDto) {
    return await this.dimansionRepository.save(createDimensionDto);
  }

  async findAll() {
    return await this.dimansionRepository.find();
  }

  async update(updateDimensionDto: UpdateDimensionDto) {
    const id = updateDimensionDto.id;
    const data: any = {
      nameDimension: updateDimensionDto.name,
    };
    return await this.dimansionRepository.update({ id }, data);
  }

  async remove(updateDimensionDto: UpdateDimensionDto) {
    const id = updateDimensionDto[0].id;
    return await this.dimansionRepository.delete(id);
  }
}
