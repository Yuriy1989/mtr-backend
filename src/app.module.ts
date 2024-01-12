import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { StoragesModule } from './storages/storages.module';
import { User } from './users/entities/user.entity';
import { FilialsModule } from './filials/filials.module';
import { DepartmentsModule } from './departments/departments.module';
import { Department } from './departments/entities/department.entity';
import { Filial } from './filials/entities/filial.entity';
import { Storage } from './storages/entities/storage.entity';
import { DimensionsModule } from './dimensions/dimensions.module';
import { RegionsModule } from './regions/regions.module';
import { ActivitiesModule } from './activities/activities.module';
import { DeliveriesModule } from './deliveries/deliveries.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'Qwerty@123',
      database: 'mtr_project',
      entities: [User, Department, Filial, Storage],
      synchronize: true,
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
