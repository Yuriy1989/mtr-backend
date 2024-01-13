import { Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { Delivery } from './entities/delivery.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeliveriesService {
  constructor(
    @InjectRepository(Delivery)
    private deliveryRepository: Repository<Delivery>,
  ) {}

  async create(createDeliveryDto: CreateDeliveryDto) {
    return await this.deliveryRepository.save(createDeliveryDto);
  }

  async findAll() {
    return await this.deliveryRepository.find();
  }

  async update(updateDeliveryDto: UpdateDeliveryDto) {
    const id = updateDeliveryDto.id;
    const data: any = {
      nameDelivery: updateDeliveryDto.name,
    };
    return await this.deliveryRepository.update({ id }, data);
  }

  async remove(updateDeliveryDto: UpdateDeliveryDto) {
    const id = updateDeliveryDto[0].id;
    return await this.deliveryRepository.delete(id);
  }
}
