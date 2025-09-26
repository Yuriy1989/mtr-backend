import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DimensionsService } from './dimensions.service';
import { CreateDimensionDto } from './dto/create-dimension.dto';
import { UpdateDimensionDto } from './dto/update-dimension.dto';
import { JwtGuard } from 'src/auth/guard/jwtAuth.guard';

@UseGuards(JwtGuard)
@Controller('dimensions')
export class DimensionsController {
  constructor(private readonly dimensionsService: DimensionsService) {}

  @Post()
  create(@Body() createDimensionDto: CreateDimensionDto) {
    return this.dimensionsService.create(createDimensionDto);
  }

  @Get()
  findAll() {
    return this.dimensionsService.findAll();
  }

  @Patch()
  update(@Body() updateDimensionDto: UpdateDimensionDto) {
    return this.dimensionsService.update(updateDimensionDto);
  }

  @Delete()
  remove(@Body() id: UpdateDimensionDto) {
    return this.dimensionsService.remove(id);
  }
}
