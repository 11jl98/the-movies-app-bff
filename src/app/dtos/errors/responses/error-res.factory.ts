import { AxiosErrorResBuilder } from './axios-error-res.builder';
import { HttpExceptionErrorResBuilder } from './http-exception-error-res.builder';
import { GenericErrorResBuilder } from './generic-error-res.builder';
import { HttpException } from '@nestjs/common';

export class ErrorResFactory {
    private static errorTypes = {
        AxiosError: AxiosErrorResBuilder,
        HttpException: HttpExceptionErrorResBuilder,
    };

    static throwExceptionFromError(error) {
        const BuilderClass = this.errorTypes[error.constructor.name];

        if (!BuilderClass) {
            throw new GenericErrorResBuilder(error).buildResponse();
        }

        const errorResponse = new BuilderClass(error).buildResponse();

        throw new HttpException(errorResponse.message, errorResponse.status);
    }
}
