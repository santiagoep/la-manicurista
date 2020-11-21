import React, { useMemo } from "react";

import Track from "@components/Track/Track";
import StyledContainer from "./Tracks.styled";

const Tracks = ({ tracks }) => {
  const memoizedTracks = useMemo(
    () =>
      tracks.map((track, index) => (
        <Track {...track} key={`track-${name}-${index}`} />
      )),
    [tracks]
  );
  return <StyledContainer>{memoizedTracks}</StyledContainer>;
};

export default Tracks;
