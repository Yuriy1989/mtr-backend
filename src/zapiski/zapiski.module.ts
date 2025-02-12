import { Module } from '@nestjs/common';
import { ZapiskiService } from './zapiski.service';
import { ZapiskiController } from './zapiski.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zapiski } from './entities/zapiski.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Zapiski])],
  controllers: [ZapiskiController],
  providers: [ZapiskiService],
})
export class ZapiskiModule {}
