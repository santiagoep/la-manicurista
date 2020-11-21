import React from "react";

import Artists from "../Artists/Artists";
import {
  StyledImage,
  StyledName,
  StyledContainer,
  StyledInfoContainer,
} from "./Track.styled";

const Track = ({ imgPreview, name, artists }) => (
  <StyledContainer>
    <StyledImage {...imgPreview} />
    <StyledInfoContainer>
      <StyledName>{name}</StyledName>
      <Artists artists={artists} />
    </StyledInfoContainer>
  </StyledContainer>
);

export default Track;
