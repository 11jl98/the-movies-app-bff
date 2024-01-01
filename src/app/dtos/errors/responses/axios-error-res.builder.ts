import { ErrorResDto } from './error-res.dto';
import { ErrorDto } from '../error.dto';

export class AxiosErrorResBuilder extends ErrorResDto<any> {
    buildResponse(): ErrorDto {
        const { response } = this.error;
        return {
            message: response ? response.data.message : this.error.message,
            status: response ? response.status : 500,
        };
    }
}
