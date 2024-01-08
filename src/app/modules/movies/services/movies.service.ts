import { HttpService } from 'src/infra/modules/http/services/http.service';
import { MoviesServiceInterface } from './movies.service.interface';
import { MovieResponse } from '../types/movies.types';
import { GetMoviesListResBuilder } from '../dtos/response/get-movies-list.res.builder';
import { GetMoviesListResBuilderDto } from '../dtos/response/get-movies-list.res.builder.dto';
import { UserDto } from '../../auth/dtos/user.dto';

export class MoviesService implements MoviesServiceInterface {
  constructor(private readonly httpService: HttpService) {}

  async getMoviesHome(user: UserDto): Promise<GetMoviesListResBuilderDto[]> {
    const getMoviesListResBuilder: GetMoviesListResBuilder =
      new GetMoviesListResBuilder();

    const { lastToken } = user;

    const responseList = await Promise.all([
      this.httpService.get<MovieResponse>(
        '/discover/tv?language=pt-BR&sort_by=popularity.desc&with_networks=213',
        { Authorization: `Bearer ${lastToken}` },
      ),
      this.httpService.get<MovieResponse>('/trending/all/week?language=pt-BR'),
      this.httpService.get<MovieResponse>('/movie/top_rated?language=pt-BR'),
      this.httpService.get<MovieResponse>(
        '/discover/movie?language=pt-BR&with_genres=28',
      ),
      this.httpService.get<MovieResponse>(
        '/discover/movie?language=pt-BR&with_genres=35',
      ),
      this.httpService.get<MovieResponse>(
        '/discover/movie?language=pt-BR&with_genres=27',
      ),
      this.httpService.get<MovieResponse>(
        '/discover/movie?language=pt-BR&with_genres=10749',
      ),
      this.httpService.get<MovieResponse>(
        '/discover/movie?language=pt-BR&with_genres=99',
      ),
    ]);

    return getMoviesListResBuilder.buildMovies(responseList);
  }
}
