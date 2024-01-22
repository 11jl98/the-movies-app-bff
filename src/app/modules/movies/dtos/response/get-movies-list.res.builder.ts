import { categoriesList } from 'src/app/commons/categories.commons';
import { GetMoviesListResBuilderDto } from './get-movies-list.res.builder.dto';
import { MovieResponse } from '../../types/movies.types';
import { MoviesListDto } from '../list-movies.dto';
import { genresList } from 'src/app/commons/genres.commons';
import { MovieDTO } from '../movie.dto';

export class GetMoviesListResBuilder {
  buildMovies(responseList: MovieResponse[]): GetMoviesListResBuilderDto {
    const builderList = responseList.map(
      (item: MovieResponse, index: number) => {
        return {
          title_list: categoriesList[index].title,
          slug: categoriesList[index].slug,
          movies: item.results,
        };
      },
    );
    return {
      list_movie: builderList,
      recommended: this.selectedRecommendedItem(builderList),
    };
  }

  selectedRecommendedItem(list: MoviesListDto[]): MovieDTO {
    const originalsList = list.find((item: any) => item.slug === 'originals');
    if (!originalsList) {
      return;
    }
    const randomChose = Math.floor(
      Math.random() * (originalsList.movies.length - 1),
    );
    return {
      ...originalsList.movies[randomChose],
      genre_ids: this.getGenres(originalsList.movies[randomChose]),
    };
  }

  getGenres(movie: MovieDTO) {
    const genresMovie = [];
    for (const genreId of movie?.genre_ids) {
      const findGenre = genresList.find((item) => item.id === Number(genreId));
      if (findGenre) genresMovie.push(findGenre);
    }
    return genresMovie;
  }
}
