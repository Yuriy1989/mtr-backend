import { IsInt, IsString } from 'class-validator';

export class CreateFilialDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}
