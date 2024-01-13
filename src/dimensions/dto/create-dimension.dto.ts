import { IsInt, IsString } from 'class-validator';

export class CreateDimensionDto {
  @IsInt()
  id?: number;

  @IsString()
  name: string;
}
