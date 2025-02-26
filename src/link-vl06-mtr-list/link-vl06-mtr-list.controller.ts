import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LinkVl06MtrListService } from './link-vl06-mtr-list.service';
import { CreateLinkVl06MtrListDto } from './dto/create-link-vl06-mtr-list.dto';
import { UpdateLinkVl06MtrListDto } from './dto/update-link-vl06-mtr-list.dto';

@Controller('link-vl06-mtr-list')
export class LinkVl06MtrListController {
  constructor(private readonly linkVl06MtrListService: LinkVl06MtrListService) {}

  @Post()
  create(@Body() createLinkVl06MtrListDto: CreateLinkVl06MtrListDto) {
    return this.linkVl06MtrListService.create(createLinkVl06MtrListDto);
  }

  @Get()
  findAll() {
    return this.linkVl06MtrListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.linkVl06MtrListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLinkVl06MtrListDto: UpdateLinkVl06MtrListDto) {
    return this.linkVl06MtrListService.update(+id, updateLinkVl06MtrListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.linkVl06MtrListService.remove(+id);
  }
}
