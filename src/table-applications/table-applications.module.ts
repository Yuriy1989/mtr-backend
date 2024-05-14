import { Module } from '@nestjs/common';
import { TableApplicationsService } from './table-applications.service';
import { TableApplicationsController } from './table-applications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableApplication } from './entities/table-application.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TableApplication])],
  controllers: [TableApplicationsController],
  providers: [TableApplicationsService],
})
export class TableApplicationsModule {}
