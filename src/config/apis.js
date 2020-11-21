import Env from "@config/env";
import { methods } from "@utils/constants";

export default () => {
  const env = Env.getInstance();
  return {
    spotify: {
      domain: "https://api.spotify.com/v1",
      endpoints: {
        getTracks: {
          endpoint: "search",
          method: methods.GET,
          config: {},
        },
      },
    },
    spotifyAccounts: {
      domain: "https://accounts.spotify.com/api",
      endpoints: {
        refreshToken: {
          endpoint: "token",
          method: methods.POST,
          config: {
            headers: {
              Authorization: `Basic ${btoa(
                `${env.spotifyClientId}:${env.spotifyClientIdSecret}`
              )}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          },
        },
      },
    },
  };
};
