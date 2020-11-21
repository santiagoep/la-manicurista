import qs from "querystring";

import Env from "@config/env";
import getApis from "./getApis";

const requiredApis = [
  {
    domain: "spotifyAccounts",
    endpoints: ["refreshToken"],
  },
];

const useRefreshToken = () =>
  new Promise((res, rej) => {
    const env = Env.getInstance();
    const apis = getApis(requiredApis);
    const { spotifyAccounts: spotifyAccountsApi } = apis;
    spotifyAccountsApi
      .refreshToken(
        qs.stringify({
          grant_type: "refresh_token",
          refresh_token: env.spotifyRefreshToken,
        })
      )
      .then(({ data }) => {
        const { access_token: newToken } = data || {};
        env.spotifyApiToken = newToken;
        return res(newToken);
      })
      .catch((error) => {
        return rej(error);
      });
  });

export default useRefreshToken;
