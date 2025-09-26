import { Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './entities/application.entity';
import { Zapiski } from 'src/zapiski/entities/zapiski.entity';
import { TableApplication } from 'src/table-applications/entities/table-application.entity';
import { MtrList } from 'src/mtr-list/entities/mtr-list.entity';
import { Transport } from 'src/transports/entities/transport.entity';
import { JournalModule } from 'src/journal/journal.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Application,
      Zapiski,
      TableApplication,
      MtrList,
      Transport,
    ]),
    JournalModule,
  ],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}
