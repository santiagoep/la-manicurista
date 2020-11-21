import React, { useCallback } from "react";

import useTrackSearch from "@hooks/endpoints/useTrackSearch";
import SearchTracks from "@containers/SearchTracks/SearchTracks";
import { StyledTitleContainer, SearchTracksContainer } from "./Home.styled";
import serializeTracks from "@containers/SearchTracks/Tracks.serializer";

import mock from "@__mocks__/apis/tracks";

const Home = () => {
  const { tracks, setPage, setQuery, total, limit } = useTrackSearch();
  /* const tracks = mock,
    setPage = () => {},
    setQuery = () => {},
    total = 100,
    limit = 10; */

  const changePage = useCallback((page) => setPage(page), [setPage]);

  const changeQuery = useCallback(
    (query) => {
      if (query?.length > 0) setQuery(query);
    },
    [setQuery]
  );

  return (
    <>
      <StyledTitleContainer>
        <img
          src="https://lamanicurista.com/wp-content/uploads/2019/01/Logo-La-manicurista-1.png"
          alt="LaManicurista Logo"
        />
      </StyledTitleContainer>
      <SearchTracksContainer>
        <SearchTracks
          tracks={serializeTracks(tracks)}
          total={total}
          limit={limit}
          setPage={setPage}
          onPageChange={changePage}
          onSearch={changeQuery}
        />
      </SearchTracksContainer>
    </>
  );
};

export default Home;
