import { AuthUserReqDto } from '../dtos/request/auth-user.req.dto';

export interface AuthRepositoryInterface {
  authUserByEmailPassword(body: AuthUserReqDto): Promise<any>;
  createSession(authUserReqDto: AuthUserReqDto): Promise<{ token: string }>;
}
