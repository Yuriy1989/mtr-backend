import { IsInt, IsString } from 'class-validator';

export class CreateStorageDto {
  @IsInt()
  id?: number;

  @IsString()
  name: string;
}
