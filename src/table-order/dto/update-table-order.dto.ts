import { PartialType } from '@nestjs/swagger';
import { CreateTableOrderDto } from './create-table-order.dto';

export class UpdateTableOrderDto extends PartialType(CreateTableOrderDto) {}
