import PropTypes from "prop-types";
import React, { useRef } from "react";

import {
  StyledH1,
  StyledH2,
  StyledLeft,
  StyledRight,
  StyledPlay,
  StyledPause,
  StyledImage,
  StyledAudio,
  StyledPlayer,
  StyledHeader,
} from "./Player.styled";
import buildArtistStr from "@utils/strings";
import useControls from "@hooks/components/player/useControls";

const Player = ({ img, name, artists, src, ...rest }) => {
  const player = useRef(null);
  const { play, pause } = useControls({ src, player });

  const renderArtists = () => <StyledH2>{buildArtistStr(artists)}</StyledH2>;

  return (
    <StyledPlayer>
      <StyledImage {...img} />
      <StyledHeader>
        <StyledLeft>
          <StyledH1>{name}</StyledH1>
          {renderArtists()}
        </StyledLeft>
        <StyledRight>
          <StyledAudio ref={player} src={src} {...rest} />
          <StyledPlay onClick={play} />
          <StyledPause onClick={pause} />
        </StyledRight>
      </StyledHeader>
    </StyledPlayer>
  );
};

Player.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  name: PropTypes.string,
  artists: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  src: PropTypes.string,
};

Player.defaultProps = {
  img: {},
  name: "",
  artists: [],
  src: undefined,
};

export default Player;
