import { IsInt, IsString } from 'class-validator';

export class CreateDeliveryDto {
  @IsInt()
  id?: number;

  @IsString()
  name: string;
}
