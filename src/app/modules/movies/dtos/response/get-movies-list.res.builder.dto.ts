import { ApiProperty } from '@nestjs/swagger';
import { MovieDTO } from '../movie.dto';
import { IsObject, IsString } from 'class-validator';
import { MoviesListDto } from '../list-movies.dto';

export class GetMoviesListResBuilderDto {
  @ApiProperty({
    isArray: true,
    type: MoviesListDto,
  })
  @IsObject()
  list_movie: MoviesListDto[];

  @ApiProperty()
  @IsString()
  recommended: MovieDTO;
}
