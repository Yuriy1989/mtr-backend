import { Module } from '@nestjs/common';
import { MtrListService } from './mtr-list.service';
import { MtrListController } from './mtr-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MtrList } from './entities/mtr-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MtrList])],
  controllers: [MtrListController],
  providers: [MtrListService],
})
export class MtrListModule {}
