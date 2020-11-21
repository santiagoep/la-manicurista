import { methods } from "@utils/constants";

const token =
  "BQAdAx8CAk13J0ZAeMocMYwSRn8jV5GnBsuVkq2vIbz1VjXf3LwVZbXXVJcIlaM12F_sr7kNxAWnaOmfusrxqfalMv9pwxVNQc5YCjm6ma08M3IJ3rjqZaB0Bqnx_25N3cACVIs1xS06fdpayILuAK_YKsE4Cwvsek1paNnOi-GeChcfseTYVw";

export default {
  spotify: {
    domain: "https://api.spotify.com/v1",
    endpoints: {
      getTracks: {
        endpoint: "search",
        method: methods.GET,
        config: {
          headers: { Authorization: `Bearer ${token}` },
        },
      },
    },
  },
};
