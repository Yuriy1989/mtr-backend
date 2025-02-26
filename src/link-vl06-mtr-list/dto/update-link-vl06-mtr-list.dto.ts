import { PartialType } from '@nestjs/swagger';
import { CreateLinkVl06MtrListDto } from './create-link-vl06-mtr-list.dto';

export class UpdateLinkVl06MtrListDto extends PartialType(CreateLinkVl06MtrListDto) {}
