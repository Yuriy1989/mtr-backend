import { Injectable } from '@nestjs/common';
import { CreateStorageDto } from './dto/create-storage.dto';
import { UpdateStorageDto } from './dto/update-storage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Storage } from './entities/storage.entity';

@Injectable()
export class StoragesService {
  constructor(
    @InjectRepository(Storage)
    private storageRepository: Repository<Storage>,
  ) {}

  async create(createStorageDto: CreateStorageDto) {
    return await this.storageRepository.save(createStorageDto);
  }

  async findAll() {
    return await this.storageRepository.find();
  }

  async update(updateStorageDto: UpdateStorageDto) {
    const id = updateStorageDto.id;
    const data: any = {
      nameStorage: updateStorageDto.name,
    };
    return await this.storageRepository.update({ id }, data);
  }

  async remove(updateStorageDto: UpdateStorageDto) {
    const id = updateStorageDto[0].id;
    return await this.storageRepository.delete(id);
  }
}
