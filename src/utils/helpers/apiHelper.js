import axios from "axios";

import apis from "@config/apis";
import { methods } from "@utils/constants";

const apiHelper = (domain) => (endpoint) => {
  const domainConfig = apis[domain];
  const endpointConfig = domainConfig?.endpoints[endpoint];
  const url = `${domainConfig?.domain}/${endpointConfig?.endpoint}`;
  const getOptions = (params) => {
    let options = [];
    if (endpointConfig.method === methods.GET) {
      options.push({
        ...params,
        ...endpointConfig.config,
      });
    } else {
      options.push(params);
      options.push(endpointConfig.config);
    }
    return options;
  };
  return (params) => axios[endpointConfig.method](url, ...getOptions(params));
};

export default apiHelper;
