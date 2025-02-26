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
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { TableOrderModule } from './table-order/table-order.module';
import { ApplicationsModule } from './applications/applications.module';
import { TableApplicationsModule } from './table-applications/table-applications.module';
import { ZapiskiModule } from './zapiski/zapiski.module';
import { Vl06Module } from './vl06/vl06.module';
import { MtrListModule } from './mtr-list/mtr-list.module';
import { LinkVl06ZapiskiModule } from './link-vl06-zapiski/link-vl06-zapiski.module';
import { LinkVl06MtrListModule } from './link-vl06-mtr-list/link-vl06-mtr-list.module';

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
    AuthModule,
    OrdersModule,
    TableOrderModule,
    ApplicationsModule,
    TableApplicationsModule,
    ZapiskiModule,
    Vl06Module,
    MtrListModule,
    LinkVl06ZapiskiModule,
    LinkVl06MtrListModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
