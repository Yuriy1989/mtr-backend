import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsService.create(createDepartmentDto);
  }

  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }

  @Patch()
  update(@Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentsService.update(updateDepartmentDto);
  }

  @Delete()
  remove(@Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentsService.remove(updateDepartmentDto);
  }
}
