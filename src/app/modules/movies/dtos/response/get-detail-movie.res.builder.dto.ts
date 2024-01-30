import { ApiProperty } from '@nestjs/swagger';
import { MovieDTO } from '../movie.dto';
import { IsObject, IsString } from 'class-validator';
import { MovieDetailDto } from '../detail';

export class GetMoviesListResBuilderDto {
  @ApiProperty({
    isArray: true,
    type: MovieDetailDto,
  })
  @IsObject()
  detail_movie: MovieDetailDto;

  @ApiProperty()
  @IsString()
  video: MovieDTO;

  @ApiProperty()
  @IsString()
  reviews: MovieDTO;

  @ApiProperty()
  @IsString()
  similar: MovieDTO;
}
