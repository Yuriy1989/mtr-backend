import { Controller, Get, Post, Req, Param } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getAll(): string {
    return 'Этот метод возращает список всех пользователей';
  }

  @Get(':id')
  find(@Param('id') id: string): string {
    return `Этот метод вернёт данные пользователя с id ${id}`;
  }

  @Post()
  create(@Req() req: Request): string {
    console.log(req);
    return 'Это метод для создания нового пользователя';
  }
}
