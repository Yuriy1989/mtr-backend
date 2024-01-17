import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { createHash } from 'src/helpers/hash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);
    const { password } = createUserDto;
    const passwordHash = await createHash(password);
    console.log('passwordHash', passwordHash);
    const user = await this.userRepository.create({
      ...createUserDto,
      password,
    });
    console.log('user', user);
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    const data = await this.userRepository.find({
      relations: {
        department: true,
      },
    });
    return data;
  }

  //выгрузка информации о пользователе с паролем, нужно для авторизации
  async findById(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }

  async findOne(query: FindOneOptions<User>) {
    return await this.userRepository.findOneOrFail(query);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { password } = updateUserDto;
    const user = await this.findById(id);
    if (password) {
      updateUserDto.password = await createHash(password);
    }

    return this.userRepository.save({ ...user, ...UpdateUserDto });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
