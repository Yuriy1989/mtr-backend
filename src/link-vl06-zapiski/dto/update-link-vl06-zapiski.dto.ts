import { PartialType } from '@nestjs/swagger';
import { CreateLinkVl06ZapiskiDto } from './create-link-vl06-zapiski.dto';

export class UpdateLinkVl06ZapiskiDto extends PartialType(CreateLinkVl06ZapiskiDto) {}
