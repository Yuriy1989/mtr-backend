import { IsString } from 'class-validator';

export class CreateDimensionDto {
  @IsString()
  nameDimension: string;
}
