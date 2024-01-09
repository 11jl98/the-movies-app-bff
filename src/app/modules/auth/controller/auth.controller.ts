import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthControllerInterface } from './auth.controller.interface';
import { AuthService } from '../service/auth.service';
import { AuthUserReqDto } from '../dtos/request/auth-user.req.dto';
import { ErrorResFactory } from 'src/app/dtos/errors/responses/error-res.factory';
import { CacheManagerInterceptor } from '../interceptors/cache-manager.interceptor';
import { randomUUID } from 'crypto';
@ApiTags('auth')
@Controller('auth')
export class AuthController implements AuthControllerInterface {
  constructor(private readonly authService: AuthService) {}
  @Post('/register')
  async authUserByEmailPassword(
    @Body() authUserReqDto: AuthUserReqDto,
  ): Promise<void> {
    try {
      await this.authService.authUserByEmailPassword(authUserReqDto);
    } catch (error) {
      console.log(error);
      ErrorResFactory.throwExceptionFromError(error);
    }
  }
  @Post('create-session')
  @UseInterceptors(CacheManagerInterceptor)
  async createSessionUser(
    @Body() authUserReqDto: AuthUserReqDto,
  ): Promise<any> {
    try {
      const sessionId = randomUUID();

      const { keyTheMovie, uid } =
        await this.authService.createSession(authUserReqDto);
      return { sessionId, keyTheMovie, uid };
    } catch (error) {
      ErrorResFactory.throwExceptionFromError(error);
    }
  }
}
