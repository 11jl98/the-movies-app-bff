import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class GenreDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}

class ProductionCompanyDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsOptional()
  logo_path: string;

  @IsString()
  name: string;

  @IsString()
  origin_country: string;
}

class ProductionCountryDto {
  @IsString()
  iso_3166_1: string;

  @IsString()
  name: string;
}

class SpokenLanguageDto {
  @IsString()
  english_name: string;

  @IsString()
  iso_639_1: string;

  @IsString()
  name: string;
}

export class MovieDetailDto {
  @IsBoolean()
  adult: boolean;

  @IsString()
  @IsOptional()
  backdrop_path: string;

  belongs_to_collection: any; // You might want to create a DTO for collection if needed

  @IsNumber()
  budget: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GenreDto)
  genres: GenreDto[];

  @IsString()
  homepage: string;

  @IsNumber()
  id: number;

  @IsString()
  imdb_id: string;

  @IsString()
  original_language: string;

  @IsString()
  original_title: string;

  @IsString()
  overview: string;

  @IsNumber()
  popularity: number;

  @IsString()
  @IsOptional()
  poster_path: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductionCompanyDto)
  production_companies: ProductionCompanyDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductionCountryDto)
  production_countries: ProductionCountryDto[];

  @IsString()
  release_date: string;

  @IsNumber()
  revenue: number;

  @IsNumber()
  runtime: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpokenLanguageDto)
  spoken_languages: SpokenLanguageDto[];

  @IsString()
  status: string;

  @IsString()
  tagline: string;

  @IsString()
  title: string;

  @IsBoolean()
  video: boolean;

  @IsNumber()
  vote_average: number;

  @IsNumber()
  vote_count: number;
}
