import { AuthUserReqDto } from '../dtos/request/auth-user.req.dto';
import { ResponseDto } from '../dtos/response.dto';

export interface AuthControllerInterface {
  authUserByEmailPassword(authUserReqDto: AuthUserReqDto): Promise<void>;
  createSessionUser(
    authUserReqDto: AuthUserReqDto,
    res: ResponseDto,
  ): Promise<string>;
}
