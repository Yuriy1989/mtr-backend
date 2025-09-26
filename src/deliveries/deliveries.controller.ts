import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { JwtGuard } from 'src/auth/guard/jwtAuth.guard';

@UseGuards(JwtGuard)
@Controller('deliveries')
export class DeliveriesController {
  constructor(private readonly deliveriesService: DeliveriesService) {}

  @Post()
  create(@Body() createDeliveryDto: CreateDeliveryDto) {
    return this.deliveriesService.create(createDeliveryDto);
  }

  @Get()
  findAll() {
    return this.deliveriesService.findAll();
  }

  @Patch()
  update(@Body() updateDeliveryDto: UpdateDeliveryDto) {
    return this.deliveriesService.update(updateDeliveryDto);
  }

  @Delete()
  remove(@Body() id: UpdateDeliveryDto) {
    return this.deliveriesService.remove(id);
  }
}
