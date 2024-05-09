import { Module } from '@nestjs/common';
import { TableApplicationsService } from './table-applications.service';
import { TableApplicationsController } from './table-applications.controller';

@Module({
  controllers: [TableApplicationsController],
  providers: [TableApplicationsService],
})
export class TableApplicationsModule {}
