import { CreateSessionDto } from '../dtos/create-session.dto';
import { AuthUserReqDto } from '../dtos/request/auth-user.req.dto';

export interface AuthServiceInterface {
  authUserByEmailPassword(body: AuthUserReqDto): Promise<void>;
  createSession(body: AuthUserReqDto): Promise<CreateSessionDto>;
}
