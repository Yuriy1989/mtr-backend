import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BasicunitService } from './basicunit.service';
import { CreateBasicunitDto } from './dto/create-basicunit.dto';
import { UpdateBasicunitDto } from './dto/update-basicunit.dto';

@Controller('basicunit')
export class BasicunitController {
  constructor(private readonly basicunitService: BasicunitService) {}

  @Post()
  // create(@Body() createBasicunitDto: CreateBasicunitDto) {
  //   return this.basicunitService.create(createBasicunitDto);
  // }
  @Get()
  findAll() {
    return this.basicunitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basicunitService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateBasicunitDto: UpdateBasicunitDto,
  // ) {
  //   return this.basicunitService.update(+id, updateBasicunitDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basicunitService.remove(+id);
  }
}
