import { RequestDto } from '../../auth/dtos/request.dto';
import { GetMoviesListResBuilderDto } from '../dtos/response/get-movies-list.res.builder.dto';

export interface MoviesControllerInterface {
  geMoviesHome(req: RequestDto): Promise<GetMoviesListResBuilderDto>;
}
