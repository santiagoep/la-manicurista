import { useCallback, useState } from "react";

import useTrackSearch from "@hooks/endpoints/useTrackSearch";

const useHome = () => {
  const [currentTrack, setCurrentTrack] = useState(undefined);
  const { tracks, error, setPage, setQuery, total, limit } = useTrackSearch();

  const changePage = useCallback((page) => setPage(page), [setPage]);

  const changeQuery = useCallback(
    (query) => {
      if (query?.length > 0) setQuery(query);
    },
    [setQuery]
  );

  const onSelectTrack = (trackData) => setCurrentTrack(trackData);
  return {
    tracks,
    error,
    total,
    limit,
    changePage,
    changeQuery,
    onSelectTrack,
    currentTrack,
  };
};

export default useHome;
