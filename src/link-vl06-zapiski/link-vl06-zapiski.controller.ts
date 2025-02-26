import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LinkVl06ZapiskiService } from './link-vl06-zapiski.service';
import { CreateLinkVl06ZapiskiDto } from './dto/create-link-vl06-zapiski.dto';
import { UpdateLinkVl06ZapiskiDto } from './dto/update-link-vl06-zapiski.dto';
import { Vl06Service } from 'src/vl06/vl06.service';

@Controller('link-vl06-zapiski')
export class LinkVl06ZapiskiController {
  constructor(
    private readonly linkVl06ZapiskiService: LinkVl06ZapiskiService,
    private readonly Vl06Service: Vl06Service,
  ) {}

  @Post()
  create(@Body() createLinkVl06ZapiskiDto: any) {
    return this.linkVl06ZapiskiService.create(createLinkVl06ZapiskiDto);
  }

  @Get()
  findAll() {
    return this.linkVl06ZapiskiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.linkVl06ZapiskiService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLinkVl06ZapiskiDto: UpdateLinkVl06ZapiskiDto,
  ) {
    return this.linkVl06ZapiskiService.update(+id, updateLinkVl06ZapiskiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.linkVl06ZapiskiService.remove(+id);
  }
}
