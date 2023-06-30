import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  BadRequestException,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get/:id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    if (id < 1) {
      throw new BadRequestException('Error: id less than 1');
    }
    return id;
    // return this.appService.getHello();
  }

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateDto) {
    const res = await this.appService.save(dto);
    return res;
  }
}
