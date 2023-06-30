import { DatabaseService } from './database/database.service';
import { Injectable, Inject } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('TEST') private test: number,
    private readonly databaseService: DatabaseService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async save(dto: CreateDto) {
    console.log(this.test);
    return this.databaseService.post.create({
      data: dto,
    });
  }
}
