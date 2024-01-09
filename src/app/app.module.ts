import { Module } from '@nestjs/common';
import { AppConfig } from '../config/app-config';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/config';
import { AuthModule } from './modules/auth/auth.module';
import { MoviesModule } from './modules/movies/movies.module';
import { HttpModule } from 'src/infra/modules/http/http.module';

@Module({
  providers: [AppConfig],
  imports: [
    AuthModule,
    MoviesModule,
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
})
export class AppModule {}
