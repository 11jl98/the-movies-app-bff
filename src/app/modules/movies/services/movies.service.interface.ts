import { UserDto } from '../../auth/dtos/user.dto';
import { GetMoviesListResBuilderDto } from '../dtos/response/get-movies-list.res.builder.dto';

export interface MoviesServiceInterface {
  getMoviesHome(user: UserDto): Promise<GetMoviesListResBuilderDto>;
  getDetailMovie(user: UserDto, movieId: string): Promise<void>;
}
