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

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  async update(updateDepartmentDto: any) {
    // const department = await this.findOne(id);
    console.log('updateDepartmentDto', updateDepartmentDto.id);
    const id = updateDepartmentDto.id;
    const data = {
      nameDepartment: updateDepartmentDto.name,
    };
    return await this.departmentRepository.update({ id }, data);
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
