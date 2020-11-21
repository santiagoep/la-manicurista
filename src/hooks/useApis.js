import apiHelper from "@utils/helpers/apiHelper";

const useApis = (requiredEndpoints) =>
  requiredEndpoints.reduce((apis, { domain, endpoints }) => {
    const api = apiHelper(domain);
    apis[domain] = endpoints.reduce((acc, curr) => {
      acc[curr] = api(curr);
      return acc;
    }, {});
    return apis;
  }, {});

export default useApis;
