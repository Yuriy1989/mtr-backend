import { Module } from '@nestjs/common';
import { LinkVl06ZapiskiService } from './link-vl06-zapiski.service';
import { LinkVl06ZapiskiController } from './link-vl06-zapiski.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkVl06Zapiski } from './entities/link-vl06-zapiski.entity';
import { Vl06Module } from 'src/vl06/vl06.module';

@Module({
  imports: [TypeOrmModule.forFeature([LinkVl06Zapiski]), Vl06Module],
  controllers: [LinkVl06ZapiskiController],
  providers: [LinkVl06ZapiskiService],
})
export class LinkVl06ZapiskiModule {}
