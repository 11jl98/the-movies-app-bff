import {
  Genre,
  ProductionCompany,
  ProductionCountry,
  SpokenLanguage,
} from './movies.types';

export class Movie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: any; // You might want to create a type for collection if needed
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
