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

  async update(updateDepartmentDto: any) {
    const id = updateDepartmentDto.id;
    const data = {
      nameDepartment: updateDepartmentDto.name,
    };
    return await this.departmentRepository.update({ id }, data);
  }

  async remove(updateDepartmentDto: any) {
    const id = updateDepartmentDto[0].id;
    return await this.departmentRepository.delete(id);
  }
}
