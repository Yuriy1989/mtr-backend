import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DepartmentsService } from 'src/departments/departments.service';
import { AuthUser } from 'src/common/decorators/user.decorator';

interface IidUser {
  id: number;
}

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly departmentService: DepartmentsService,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return {
      success: true,
      data: user,
    };
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('me')
  findOwn(@AuthUser() user) {
    return this.usersService.findOne({
      where: { id: user.id },
      select: {
        email: true,
        firstName: true,
        lastName: true,
        surname: true,
      },
    });
  }

  @Patch()
  async update(@Body() updateUserDto: any) {
    console.log('updateUserDto', updateUserDto);
    const updateUser = await this.usersService.update(
      updateUserDto?.id,
      updateUserDto,
    );
    return {
      success: true,
      data: updateUser,
    };
  }

  @Delete()
  remove(@Body() data: IidUser) {
    return this.usersService.remove(data.id);
  }
}
