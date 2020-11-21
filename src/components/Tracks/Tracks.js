import PropTypes from "prop-types";
import React, { useMemo } from "react";

import Track from "@components/Track/Track";
import StyledContainer from "./Tracks.styled";

const Tracks = ({ tracks, onSelectTrack }) => {
  const memoizedTracks = useMemo(
    () =>
      tracks.map((track, index) => (
        <Track
          {...track}
          key={`track-${name}-${index}`}
          onClick={onSelectTrack}
        />
      )),
    [tracks]
  );
  return <StyledContainer>{memoizedTracks}</StyledContainer>;
};

Tracks.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape(Track.propTypes)),
  onSelectTrack: PropTypes.func,
};

Tracks.defaultProps = {
  tracks: [],
  onSelectTrack: () => {},
};

export default Tracks;
