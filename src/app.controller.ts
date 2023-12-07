import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get('/health')
  getHello() {
    return {
      status: 'ok',
    };
  }
  @Get('/config')
  getConfig() {
    return {
      status: 'ok',
      api: this.configService.get<string>('ENV_NODE'),
    };
  }
  @Get('/items')
  getItems() {
    return [
      {
        id: 1,
        name: 'Item 1',
        description: 'This is item 1',
        price: 100,
      },
      {
        id: 2,
        name: 'Item 2',
        description: 'This is item 2',
        price: 200,
      },
      {
        id: 3,
        name: 'Item 3',
        description: 'This is item 3',
        price: 300,
      },
    ];
  }
}
