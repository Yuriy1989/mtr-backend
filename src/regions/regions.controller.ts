import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { CreateRegionDto } from './dto/create-region.dto';

@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionsService.create(createRegionDto);
  }

  @Get()
  findAll() {
    return this.regionsService.findAll();
  }

  @Patch()
  update(@Body() updateRegionDto: any) {
    const id = updateRegionDto.id;
    const data: any = {
      nameRegion: updateRegionDto.name,
    };
    return this.regionsService.update(data, id);
  }

  @Delete()
  remove(@Body() id: any) {
    return this.regionsService.remove(id);
  }
}
