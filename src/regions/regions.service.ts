import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from './entities/region.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Region)
    private regionRepository: Repository<Region>,
  ) {}

  async create(createRegionDto: CreateRegionDto) {
    return await this.regionRepository.save(createRegionDto);
  }

  async findAll() {
    return await this.regionRepository.find();
  }

  async update(updateRegionDto: UpdateRegionDto) {
    const id = updateRegionDto.id;
    const data: any = {
      nameRegion: updateRegionDto.name,
    };
    return await this.regionRepository.update({ id }, data);
  }

  async remove(updateRegionDto: UpdateRegionDto) {
    const id = updateRegionDto[0].id;
    return await this.regionRepository.delete(id);
  }
}
