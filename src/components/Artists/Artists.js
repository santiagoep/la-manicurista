import React, { useMemo } from "react";

import Artist from "../Artist/Artist";
import StyledContainer from "./Artists.styled";

const Artists = ({ artists }) => {
  const memoizedArtists = useMemo(
    () =>
      artists.map((artist, index) => (
        <Artist
          {...artist}
          key={`artist-${artist.name}-${index}`}
          className="artists__artist"
        />
      )),
    [artists]
  );
  return <StyledContainer>{memoizedArtists}</StyledContainer>;
};

export default Artists;
