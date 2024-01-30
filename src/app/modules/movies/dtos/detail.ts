import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { GenreDto } from './genre.dto';
import { ProductionCompanyDto } from './production-company.dto';
import { ProductionCountryDto } from './production-country.dto';
import { SpokenLanguageDto } from './spoken-language.dto';
import { ApiProperty } from '@nestjs/swagger';

export class MovieDetailDto {
  @ApiProperty()
  @IsBoolean()
  adult: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  backdrop_path: string;

  @ApiProperty()
  belongs_to_collection: any;

  @ApiProperty()
  @IsNumber()
  budget: number;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GenreDto)
  genres: GenreDto[];

  @ApiProperty()
  @IsString()
  homepage: string;

  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  imdb_id: string;

  @ApiProperty()
  @IsString()
  original_language: string;

  @ApiProperty()
  @IsString()
  original_title: string;

  @ApiProperty()
  @IsString()
  overview: string;

  @ApiProperty()
  @IsNumber()
  popularity: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  poster_path: string;

  @ApiProperty({
    isArray: true,
    type: ProductionCompanyDto,
  })
  @IsArray()
  production_companies: ProductionCompanyDto[];

  @ApiProperty({
    isArray: true,
    type: ProductionCountryDto,
  })
  @IsArray()
  production_countries: ProductionCountryDto[];

  @ApiProperty()
  @IsString()
  release_date: string;

  @ApiProperty()
  @IsNumber()
  revenue: number;

  @ApiProperty()
  @IsNumber()
  runtime: number;

  @ApiProperty({
    isArray: true,
    type: SpokenLanguageDto,
  })
  @IsArray()
  spoken_languages: SpokenLanguageDto[];

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsString()
  tagline: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsBoolean()
  video: boolean;

  @ApiProperty()
  @IsNumber()
  vote_average: number;

  @ApiProperty()
  @IsNumber()
  vote_count: number;
}
