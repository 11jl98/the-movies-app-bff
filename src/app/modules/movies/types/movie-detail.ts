import {
  Genre,
  ProductionCompany,
  ProductionCountry,
  SpokenLanguage,
} from './movies.types';

export class MovieDetailResponse {
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

export class Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
}

export class ResponseVideo {
  id: string;
  results: Video[];
}

export class AuthorDetail {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number;
}

export class Review {
  author: string;
  author_details: AuthorDetail;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export class MovieReviewsResponse {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
}
