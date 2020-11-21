import nprogress from "nprogress";
import statusCodes from "http-status-codes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Env from "@config/env";
import getApis from "@utils/apis/getApis";
import refreshToken from "@utils/apis/spotifyRefreshToken";

const requiredApis = [
  {
    domain: "spotify",
    endpoints: ["getTracks"],
  },
  {
    domain: "spotifyAccounts",
    endpoints: ["refreshToken"],
  },
];

const MAX_ATTEMPTS = 1;

const useTrackSearch = ({
  market = "ES",
  q = "A",
  limit = 10,
  offset = 0,
} = {}) => {
  const env = Env.getInstance();
  const { t } = useTranslation();
  const [error, setError] = useState(undefined);
  const [query, setQuery] = useState(q);
  const [page, setPage] = useState(offset);
  const [tracks, setTracks] = useState([]);
  const [totalTracks, setTotalTracks] = useState(0);
  const apis = getApis(requiredApis);
  const { spotify: spotifyApi } = apis;

  useEffect(() => {
    const getTracks = () =>
      spotifyApi.getTracks(
        {
          params: {
            market,
            q: query,
            type: "track",
            limit,
            offset: page * limit,
          },
        },
        { headers: { Authorization: `Bearer ${env.spotifyApiToken}` } }
      );

    const manageResponse = ({ data }) => {
      setError(undefined);
      const { tracks: tracksResult } = data || {};
      setTracks(tracksResult?.items);
      setTotalTracks(tracksResult?.total);
      nprogress.done();
    };

    const manageError = (e, times) => {
      const { status } = e.response;
      if (status === statusCodes.UNAUTHORIZED) {
        refreshToken()
          .then((newToken) => {
            env.spotifyApiToken = newToken;
            if (times <= MAX_ATTEMPTS)
              getTracks()
                .then(manageResponse)
                .catch((err) => manageError(err, times + 1));
          })
          .catch(() => {
            nprogress.done();
            setError(t("unauthorized"));
          });
      } else if (status === statusCodes.NOT_FOUND) {
        nprogress.done();
        setError(t("thereArentTracksInThisPage"));
      } else {
        nprogress.done();
        setError(t("unknownError"));
      }
    };
    nprogress.start();
    getTracks()
      .then(manageResponse)
      .catch((e) => manageError(e, 1));
  }, [page, query]);
  return {
    tracks,
    error,
    setPage,
    setQuery,
    offset,
    total: totalTracks,
    limit,
  };
};

export default useTrackSearch;
