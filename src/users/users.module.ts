import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DepartmentsModule } from 'src/departments/departments.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => DepartmentsModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
