import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Vl06Service } from './vl06.service';
import { CreateVl06Dto } from './dto/create-vl06.dto';
import { UpdateVl06Dto } from './dto/update-vl06.dto';

@Controller('vl06')
export class Vl06Controller {
  constructor(private readonly vl06Service: Vl06Service) {}

  @Post()
  create(@Body() createVl06Dto: any) {
    const data = this.vl06Service.create(createVl06Dto);
    return {
      success: true,
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.vl06Service.findAll();
    return {
      success: true,
      data,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vl06Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVl06Dto: UpdateVl06Dto) {
    return this.vl06Service.update(+id, updateVl06Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vl06Service.remove(+id);
  }
}
