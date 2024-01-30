import { Controller, Get, Param, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MoviesControllerInterface } from './movies.controller.interface';
import { MoviesService } from '../services/movies.service';
import { GetMoviesListResBuilderDto } from '../dtos/response/get-movies-list.res.builder.dto';
import { RequestDto } from '../../auth/dtos/request.dto';
import { ErrorResFactory } from 'src/app/dtos/errors/responses/error-res.factory';

@ApiTags('movie')
@Controller('movie')
export class MoviesController implements MoviesControllerInterface {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async getMoviesHome(
    @Request() req: RequestDto,
  ): Promise<GetMoviesListResBuilderDto> {
    try {
      const { user } = req;
      return await this.moviesService.getMoviesHome(user);
    } catch (error) {
      ErrorResFactory.throwExceptionFromError(error);
    }
  }

  @Get('/movieId')
  async getDetailMovie(
    @Request() req: RequestDto,
    @Param('movieId') movieId: string,
  ): Promise<void> {
    try {
      const { user } = req;
      return await this.moviesService.getDetailMovie(user, movieId);
    } catch (error) {
      ErrorResFactory.throwExceptionFromError(error);
    }
  }
}
