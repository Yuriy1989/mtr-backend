import { Module } from '@nestjs/common';
import { DimensionsService } from './dimensions.service';
import { DimensionsController } from './dimensions.controller';

@Module({
  controllers: [DimensionsController],
  providers: [DimensionsService],
})
export class DimensionsModule {}
