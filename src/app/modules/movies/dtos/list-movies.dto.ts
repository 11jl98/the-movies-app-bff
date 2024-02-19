import { ApiProperty } from '@nestjs/swagger';
import { MovieDto } from './movie.dto';
import { IsString } from 'class-validator';

export class MoviesListDto {
  @ApiProperty({
    isArray: true,
    type: MovieDto,
  })
  movies: MovieDto[];

  @ApiProperty()
  @IsString()
  title_list: string;

  @ApiProperty()
  @IsString()
  slug: string;
}
