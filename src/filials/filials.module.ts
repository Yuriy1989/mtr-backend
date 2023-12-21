import { Module } from '@nestjs/common';
import { FilialsService } from './filials.service';
import { FilialsController } from './filials.controller';

@Module({
  controllers: [FilialsController],
  providers: [FilialsService],
})
export class FilialsModule {}
