import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { StoragesModule } from './storages/storages.module';
import { User } from './users/entities/user.entity';
import { MeasuresModule } from './measures/measures.module';
import { FilialsModule } from './filials/filials.module';
import { DepartmentsModule } from './departments/departments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'Qwerty@123',
      database: 'mtr_project',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    StoragesModule,
    MeasuresModule,
    FilialsModule,
    DepartmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
