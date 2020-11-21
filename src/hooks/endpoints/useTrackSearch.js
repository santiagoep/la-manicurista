import { useEffect, useState } from "react";

import useApis from "@hooks/useApis";

const requiredApis = [
  {
    domain: "spotify",
    endpoints: ["getTracks"],
  },
];

const useTrackSearch = ({
  market = "ES",
  q = "A",
  limit = 10,
  offset = 0,
} = {}) => {
  const [query, setQuery] = useState(q);
  const [page, setPage] = useState(offset);
  const [tracks, setTracks] = useState([]);
  const [totalTracks, setTotalTracks] = useState(0);
  const apis = useApis(requiredApis);
  const { spotify: spotifyApi } = apis;

  useEffect(() => {
    spotifyApi
      .getTracks({
        params: {
          market,
          q: query,
          type: "track",
          limit,
          offset: page,
        },
      })
      .then(({ data }) => {
        const { tracks: tracksResult } = data || {};
        setTracks(tracksResult?.items);
        setTotalTracks(tracksResult?.total);
      });
  }, [page, query]);
  return { tracks, setPage, setQuery, offset, total: totalTracks, limit };
};

export default useTrackSearch;
