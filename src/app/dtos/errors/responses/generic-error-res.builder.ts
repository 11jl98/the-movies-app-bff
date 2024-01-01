import { ErrorResDto } from './error-res.dto';
import { ErrorDto } from '../error.dto';

export class GenericErrorResBuilder extends ErrorResDto<any> {
    buildResponse(): ErrorDto {
        return {
            message: 'Internal Server Error',
            status: 500,
        };
    }
}
