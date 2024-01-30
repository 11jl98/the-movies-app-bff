import { RequestDto } from '../../auth/dtos/request.dto';
import { GetMoviesListResBuilderDto } from '../dtos/response/get-movies-list.res.builder.dto';

export interface MoviesControllerInterface {
  getMoviesHome(req: RequestDto): Promise<GetMoviesListResBuilderDto>;
  getDetailMovie(req: RequestDto, movieId: string): Promise<void>;
}
