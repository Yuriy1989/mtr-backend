import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filialsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilialDto: UpdateFilialDto) {
    return this.filialsService.update(+id, updateFilialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filialsService.remove(+id);
  }
}
