import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityDto } from './create-activity.dto';
import { IsInt } from 'class-validator';

export class UpdateActivityDto extends PartialType(CreateActivityDto) {
  @IsInt()
  id: number;
}
