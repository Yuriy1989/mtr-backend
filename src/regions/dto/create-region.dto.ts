import { IsInt, IsString } from 'class-validator';

export class CreateRegionDto {
  @IsInt()
  id?: number;

  @IsString()
  name: string;
}
