import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { StoragesModule } from './storages/storages.module';
import { FilialsModule } from './filials/filials.module';
import { DepartmentsModule } from './departments/departments.module';
import { DimensionsModule } from './dimensions/dimensions.module';
import { RegionsModule } from './regions/regions.module';
import { ActivitiesModule } from './activities/activities.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import configuration from './config/configuration';
import { AppServices } from './config/appService';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useClass: AppServices,
    }),
    UsersModule,
    StoragesModule,
    FilialsModule,
    DepartmentsModule,
    DimensionsModule,
    RegionsModule,
    ActivitiesModule,
    DeliveriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
