import React from "react";
import PropTypes from "prop-types";

import {
  StyledImage,
  StyledName,
  StyledContainer,
  StyledInfoContainer,
} from "./Track.styled";
import Artists from "../Artists/Artists";

const Track = ({ imgPreviews, name, artists, onClick, ...rest }) => (
  <StyledContainer
    {...rest}
    onClick={() => onClick({ imgPreviews, name, artists, ...rest })}
  >
    <StyledImage {...imgPreviews.small} />
    <StyledInfoContainer>
      <StyledName>{name}</StyledName>
      <Artists artists={artists} />
    </StyledInfoContainer>
  </StyledContainer>
);

Track.propTypes = {
  imgPreviews: PropTypes.shape({
    small: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    medium: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    large: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  }).isRequired,
  name: PropTypes.string.isRequired,
  artists: Artists.propTypes.artists.isRequired,
  onClick: PropTypes.func,
};

Track.defaultProps = {
  onClick: () => {},
};

export default Track;
