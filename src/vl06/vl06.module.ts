import { Module } from '@nestjs/common';
import { Vl06Service } from './vl06.service';
import { Vl06Controller } from './vl06.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vl06 } from './entities/vl06.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vl06])],
  controllers: [Vl06Controller],
  providers: [Vl06Service],
  exports: [Vl06Service],
})
export class Vl06Module {}
