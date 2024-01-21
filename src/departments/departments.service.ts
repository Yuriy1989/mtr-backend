import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    return await this.departmentRepository.save(createDepartmentDto);
  }

  async findAll() {
    return await this.departmentRepository.find();
  }

  async findByOne(id: number) {
    return await this.departmentRepository.findOneBy({ id });
  }

  async update(updateDepartmentDto: UpdateDepartmentDto) {
    const id: number = updateDepartmentDto.id;
    const data: CreateDepartmentDto = {
      nameDepartment: updateDepartmentDto.nameDepartment,
      numberDepartment: updateDepartmentDto.numberDepartment,
    };
    return await this.departmentRepository.update({ id }, data);
  }

  async remove(id: number) {
    return await this.departmentRepository.delete(id);
  }
}
