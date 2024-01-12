import { IsInt, IsString } from 'class-validator';

export class CreateDepartmentDto {
  @IsInt()
  id?: number;

  @IsString()
  name: string;
}
