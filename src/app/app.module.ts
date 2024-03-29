import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppConfig } from '../config/app-config';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/config';
import { AuthModule } from './modules/auth/auth.module';
import { MoviesModule } from './modules/movies/movies.module';
import * as cookieParser from 'cookie-parser';

@Module({
  providers: [AppConfig],
  imports: [
    AuthModule,
    MoviesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
