import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZapiskiService } from './zapiski.service';
import { CreateZapiskiDto } from './dto/create-zapiski.dto';
import { UpdateZapiskiDto } from './dto/update-zapiski.dto';

@Controller('zapiski')
export class ZapiskiController {
  constructor(private readonly zapiskiService: ZapiskiService) {}

  @Post()
  create(@Body() createZapiskiDto: any) {
    return this.zapiskiService.create(createZapiskiDto);
  }

  @Get()
  findAll() {
    return this.zapiskiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zapiskiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZapiskiDto: UpdateZapiskiDto) {
    return this.zapiskiService.update(+id, updateZapiskiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zapiskiService.remove(+id);
  }
}
