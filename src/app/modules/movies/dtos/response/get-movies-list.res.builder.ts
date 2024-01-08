import { categoriesList } from 'src/app/commons/categories.commons';
import { GetMoviesListResBuilderDto } from './get-movies-list.res.builder.dto';
import { MovieResponse } from '../../types/movies.types';

export class GetMoviesListResBuilder {
  buildMovies(responseList: MovieResponse[]): GetMoviesListResBuilderDto[] {
    return responseList.map((item: MovieResponse, index: number) => {
      return {
        title_list: categoriesList[index].title,
        slug: categoriesList[index].slug,
        movies: item.results,
      };
    });
  }
}
