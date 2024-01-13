import { IsInt, IsString } from 'class-validator';

export class CreateActivityDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}
