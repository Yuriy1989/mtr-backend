import { IsString } from 'class-validator';

export class CreateDeliveryDto {
  @IsString()
  nameDelivery: string;
}
