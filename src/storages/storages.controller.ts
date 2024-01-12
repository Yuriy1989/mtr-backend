import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { StoragesService } from './storages.service';
import { CreateStorageDto } from './dto/create-storage.dto';
import { UpdateStorageDto } from './dto/update-storage.dto';

@Controller('storages')
export class StoragesController {
  constructor(private readonly storagesService: StoragesService) {}

  @Post()
  create(@Body() createStorageDto: CreateStorageDto) {
    return this.storagesService.create(createStorageDto);
  }

  @Get()
  findAll() {
    return this.storagesService.findAll();
  }

  @Patch()
  update(@Body() updateStorageDto: UpdateStorageDto) {
    return this.storagesService.update(updateStorageDto);
  }

  @Delete()
  remove(@Body() updateStorageDto: UpdateStorageDto) {
    return this.storagesService.remove(updateStorageDto);
  }
}
