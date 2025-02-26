import { Module } from '@nestjs/common';
import { LinkVl06MtrListService } from './link-vl06-mtr-list.service';
import { LinkVl06MtrListController } from './link-vl06-mtr-list.controller';

@Module({
  controllers: [LinkVl06MtrListController],
  providers: [LinkVl06MtrListService],
})
export class LinkVl06MtrListModule {}
