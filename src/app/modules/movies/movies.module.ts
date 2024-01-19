import { Module } from '@nestjs/common';
import { MoviesService } from './services/movies.service';
import { AxiosModule } from 'src/infra/modules/http/http.module';
import { MoviesController } from './controllers/movies.controller';

@Module({
  providers: [MoviesService],
  controllers: [MoviesController],
  imports: [AxiosModule],
})
export class MoviesModule {}
