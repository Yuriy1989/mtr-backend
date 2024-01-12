import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { FilialsService } from './filials.service';
import { CreateFilialDto } from './dto/create-filial.dto';
import { UpdateFilialDto } from './dto/update-filial.dto';

@Controller('filials')
export class FilialsController {
  constructor(private readonly filialsService: FilialsService) {}

  @Post()
  create(@Body() createFilialDto: CreateFilialDto) {
    return this.filialsService.create(createFilialDto);
  }

  @Get()
  findAll() {
    return this.filialsService.findAll();
  }

  @Patch()
  update(@Body() updateFilialDto: UpdateFilialDto) {
    return this.filialsService.update(updateFilialDto);
  }

  @Delete()
  remove(@Body() updateFilialDto: UpdateFilialDto) {
    return this.filialsService.remove(updateFilialDto);
  }
}
