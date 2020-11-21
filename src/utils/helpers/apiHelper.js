import axios from "axios";

import { methods } from "@utils/constants";
import getApisDefinition from "@config/apis";

const apiHelper = (domain) => (endpoint) => {
  const domainConfig = getApisDefinition()[domain];
  const endpointConfig = domainConfig?.endpoints[endpoint];
  const url = `${domainConfig?.domain}/${endpointConfig?.endpoint}`;
  const getOptions = (params, config) => {
    const options = [];
    if (endpointConfig.method === methods.GET) {
      options.push({
        ...params,
        ...endpointConfig.config,
        ...config,
      });
    } else {
      options.push(params);
      options.push({ ...endpointConfig.config, ...config });
    }
    return options;
  };
  return (params, config) =>
    axios[endpointConfig.method](url, ...getOptions(params, config));
};

export default apiHelper;
