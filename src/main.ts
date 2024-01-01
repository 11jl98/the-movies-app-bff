import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { INestApplication } from '@nestjs/common';
import getConfiguration, { Configuration } from './config/config';
class App {
  app: INestApplication;
  private defaultConfig: Configuration;
  constructor() {
    this.startSetup();
    this.defaultConfig = getConfiguration();
  }

  async startSetup() {
    try {
      await this.bootstrap();
      await this.serverSetup();
    } catch (err) {
      console.log(err.message);
    }
  }

  async bootstrap() {
    this.app = await NestFactory.create(AppModule);
  }

  async serverSetup() {
    await this.app.listen(this.defaultConfig.port, async () => {
      console.log(`Application is running on: ${await this.app.getUrl()}`);
    });
  }
}
export default new App();
