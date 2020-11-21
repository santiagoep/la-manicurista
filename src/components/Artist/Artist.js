import React from "react";

import StyledArtist from "./Artist.styled";

const Artist = ({ name, ...rest }) => (
  <StyledArtist {...rest}>{name}</StyledArtist>
);

export default Artist;
