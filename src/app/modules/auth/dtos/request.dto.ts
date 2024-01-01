import { UserDto } from './user.dto';

export interface RequestDto extends Request {
  user?: UserDto;
  cookies: {
    [key: string]: string;
  };
}
