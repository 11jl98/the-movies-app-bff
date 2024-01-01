import { AuthUserReqDto } from '../dtos/request/auth-user.req.dto';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { AuthRepositoryInterface } from './auth.repository.inteface';
@Injectable()
export class AuthRepository implements AuthRepositoryInterface {
  constructor() {}

  async authUserByEmailPassword(body: AuthUserReqDto): Promise<any> {
    const { email, password } = body;
    const user = await admin.auth().createUser({
      email,
      password,
    });
    return user;
  }
  async createSession(
    authUserReqDto: AuthUserReqDto,
  ): Promise<{ token: string }> {
    const user = await admin.auth().getUserByEmail(authUserReqDto.email);
    const token = await admin.auth().createCustomToken(user.uid);
    return { token };
  }
}
