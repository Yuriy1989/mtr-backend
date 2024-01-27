import { PartialType } from '@nestjs/mapped-types';
import { CreateDimensionDto } from './create-dimension.dto';
import { IsInt } from 'class-validator';

export class UpdateDimensionDto extends PartialType(CreateDimensionDto) {
  @IsInt()
  id: number;
}
