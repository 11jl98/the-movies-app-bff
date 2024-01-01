import { AppConfig } from 'src/config/app-config';
import { CreateSessionDto } from '../dtos/create-session.dto';
import { AuthUserReqDto } from '../dtos/request/auth-user.req.dto';
import { AuthRepository } from '../repositories/auth.repository';
import { AuthServiceInterface } from './auth.service.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService implements AuthServiceInterface {
  constructor(private readonly authRepository: AuthRepository) {}

  async authUserByEmailPassword(body: AuthUserReqDto): Promise<void> {
    return this.authRepository.authUserByEmailPassword(body);
  }

  async createSession(body: AuthUserReqDto): Promise<CreateSessionDto> {
    const { token } = await this.authRepository.createSession(body);
    const keyTheMovie = AppConfig.get('theMovieApi.apiKey');
    console.log(keyTheMovie, 'key aqui');
    return {
      keyTheMovie: keyTheMovie,
      sessionFirebase: token,
    };
  }
}
