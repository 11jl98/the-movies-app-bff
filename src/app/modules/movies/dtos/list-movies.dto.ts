import { ApiProperty } from '@nestjs/swagger';
import { MovieDTO } from './movie.dto';
import { IsString } from 'class-validator';

export class MoviesListDto {
  @ApiProperty({
    isArray: true,
    type: MovieDTO,
  })
  movies: MovieDTO[];

  @ApiProperty()
  @IsString()
  title_list: string;

  @ApiProperty()
  @IsString()
  slug: string;
}
