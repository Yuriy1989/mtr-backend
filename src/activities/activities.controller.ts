import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { JwtGuard } from 'src/auth/guard/jwtAuth.guard';

@UseGuards(JwtGuard)
@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activitiesService.create(createActivityDto);
  }

  @Get()
  findAll() {
    return this.activitiesService.findAll();
  }

  @Patch()
  update(@Body() updateActivityDto: UpdateActivityDto) {
    return this.activitiesService.update(updateActivityDto);
  }

  @Delete()
  remove(@Body() id: UpdateActivityDto) {
    return this.activitiesService.remove(id);
  }
}
