import { HttpServices } from 'src/infra/modules/http/services/http.service';
import { MoviesServiceInterface } from './movies.service.interface';
import { MovieResponse } from '../types/movies.types';
import { GetMoviesListResBuilder } from '../dtos/response/get-movies-list.res.builder';
import { GetMoviesListResBuilderDto } from '../dtos/response/get-movies-list.res.builder.dto';
import { UserDto } from '../../auth/dtos/user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService implements MoviesServiceInterface {
  constructor(private readonly httpService: HttpServices) {}

  async getMoviesHome(user: UserDto): Promise<GetMoviesListResBuilderDto> {
    const getMoviesListResBuilder: GetMoviesListResBuilder =
      new GetMoviesListResBuilder();

    const { lastToken } = user;

    const responseList = await Promise.all([
      this.httpService.getInfo<MovieResponse>(
        '/discover/tv?language=pt-BR&sort_by=popularity.desc&with_networks=213',
        { Authorization: `Bearer ${lastToken}` },
      ),
      this.httpService.getInfo<MovieResponse>(
        '/trending/all/week?language=pt-BR',
        {
          Authorization: `Bearer ${lastToken}`,
        },
      ),
      this.httpService.getInfo<MovieResponse>(
        '/movie/top_rated?language=pt-BR',
        {
          Authorization: `Bearer ${lastToken}`,
        },
      ),
      this.httpService.getInfo<MovieResponse>(
        '/discover/movie?language=pt-BR&with_genres=28',
        { Authorization: `Bearer ${lastToken}` },
      ),
      this.httpService.getInfo<MovieResponse>(
        '/discover/movie?language=pt-BR&with_genres=35',
        { Authorization: `Bearer ${lastToken}` },
      ),
      this.httpService.getInfo<MovieResponse>(
        '/discover/movie?language=pt-BR&with_genres=27',
        { Authorization: `Bearer ${lastToken}` },
      ),
      this.httpService.getInfo<MovieResponse>(
        '/discover/movie?language=pt-BR&with_genres=10749',
        { Authorization: `Bearer ${lastToken}` },
      ),
      this.httpService.getInfo<MovieResponse>(
        '/discover/movie?language=pt-BR&with_genres=99',
        { Authorization: `Bearer ${lastToken}` },
      ),
    ]);

    return getMoviesListResBuilder.buildMovies(responseList);
  }
}
