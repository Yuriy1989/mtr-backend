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
    const id: number = updateDimensionDto.id;
    const data: CreateDimensionDto = {
      nameDimension: updateDimensionDto.nameDimension,
    };
    return await this.dimansionRepository.update({ id }, data);
  }

  async remove(id: UpdateDimensionDto) {
    return await this.dimansionRepository.delete(id);
  }
}
