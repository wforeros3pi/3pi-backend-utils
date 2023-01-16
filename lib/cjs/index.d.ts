import * as errors from '@common/dto/enums/errors_enums';
import * as httpUtils from '@http/interface_adapters/http_repo';
import { AxiosImplementation } from '@fnd/storage/axios/axios_implementation';
declare const trespiUtils: {
    common: {
        errors: typeof errors;
    };
    externalInterfaces: {
        http: {
            AxiosImplementation: typeof AxiosImplementation;
            utils: typeof httpUtils;
        };
    };
    http: {
        AxiosImplementation: typeof AxiosImplementation;
        utils: typeof httpUtils;
    };
};
export default trespiUtils;
