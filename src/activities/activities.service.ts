import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async create(CreateActivityDto: CreateActivityDto) {
    return await this.activityRepository.save(CreateActivityDto);
  }

  async findAll() {
    return await this.activityRepository.find();
  }

  async update(updateActivityDto: UpdateActivityDto) {
    const id = updateActivityDto.id;
    const data: any = {
      nameActivity: updateActivityDto.name,
    };
    return await this.activityRepository.update({ id }, data);
  }

  async remove(updateActivityDto: UpdateActivityDto) {
    const id = updateActivityDto[0].id;
    return await this.activityRepository.delete(id);
  }
}
