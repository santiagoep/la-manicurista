import React from "react";

import {
  StyledContainer,
  SearchTracksContainer,
  StyledTrackDetailContainer,
} from "./Home.styled";

import useHome from "@hooks/pages/home/useHome";
import TrackDetail from "@components/TrackDetail/TrackDetail";
import SearchTracks from "@containers/SearchTracks/SearchTracks";
import serializeTracks from "@containers/SearchTracks/Tracks.serializer";

const Home = () => {
  const {
    tracks,
    error,
    total,
    limit,
    changePage,
    changeQuery,
    onSelectTrack,
    currentTrack,
  } = useHome();

  return (
    <StyledContainer>
      <SearchTracksContainer className="home__track-list">
        <SearchTracks
          tracks={serializeTracks(tracks)}
          error={error}
          total={total}
          limit={limit}
          onPageChange={changePage}
          onSearch={changeQuery}
          onSelectTrack={onSelectTrack}
        />
      </SearchTracksContainer>
      <StyledTrackDetailContainer className="home__track-detail">
        <TrackDetail {...currentTrack} />
      </StyledTrackDetailContainer>
    </StyledContainer>
  );
};

export default Home;
