import * as errors from '@common/dto/enums/errors_enums';
import * as httpUtils from '@http/interface_adapters/http_repo';
// import * as mongo from '@fnd/storage/mongo/client';
import { AxiosImplementation } from '@fnd/storage/axios/axios_implementation';

const createInstance = () => {
  const common = {
    errors
  };
  const http = {
    AxiosImplementation,
    utils: httpUtils
  };

  const externalInterfaces = {
    http
    // mongo
  };
  return { common, externalInterfaces, http };
};

const trespiUtils = createInstance();
// const axios = new trespiUtils.http.AxiosImplementation('');

export default trespiUtils;
