export class Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export class MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export class Genre {
  id: number;
  name: string;
}

export class ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export class ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export class SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export class MovieDetails extends Movie {
  belongs_to_collection: any | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}
