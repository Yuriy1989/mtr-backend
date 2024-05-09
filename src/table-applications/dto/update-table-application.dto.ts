import { PartialType } from '@nestjs/swagger';
import { CreateTableApplicationDto } from './create-table-application.dto';

export class UpdateTableApplicationDto extends PartialType(CreateTableApplicationDto) {}
