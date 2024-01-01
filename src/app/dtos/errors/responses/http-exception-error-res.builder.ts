import { ErrorResDto } from './error-res.dto';
import { HttpException } from '@nestjs/common';
import { ErrorDto } from '../error.dto';

export class HttpExceptionErrorResBuilder extends ErrorResDto<HttpException> {
    buildResponse(): ErrorDto {
        return {
            message: this.error.message,
            status: this.error.getStatus(),
        };
    }
}
