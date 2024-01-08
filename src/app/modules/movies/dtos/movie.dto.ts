import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsString,
  IsDate,
  IsArray,
} from 'class-validator';

export class MovieDTO {
  @ApiProperty()
  @IsBoolean()
  adult: boolean;

  @ApiProperty()
  @IsString()
  backdrop_path: string;

  @ApiProperty()
  @IsArray()
  genre_ids: number[];

  @ApiProperty()
  @IsNumber()
  id: number;

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
  poster_path: string;

  @ApiProperty()
  @IsDate()
  release_date: string;

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
