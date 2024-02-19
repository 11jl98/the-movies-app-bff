import { ApiProperty } from '@nestjs/swagger';
import { MovieDto } from '../movie.dto';
import { IsObject } from 'class-validator';
import { MoviesListDto } from '../list-movies.dto';

export class GetMoviesListResBuilderDto {
  @ApiProperty({
    isArray: true,
    type: MoviesListDto,
  })
  list_movie: MoviesListDto[];

  @ApiProperty({
    isArray: false,
    type: MoviesListDto,
  })
  @IsObject()
  recommended: MovieDto;
}
