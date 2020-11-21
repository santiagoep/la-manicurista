import React from "react";
import PropTypes from "prop-types";

import StyledArtist from "./Artist.styled";

const Artist = ({ name, ...rest }) =>
  name ? <StyledArtist {...rest}>{name}</StyledArtist> : <></>;

Artist.propTypes = {
  name: PropTypes.string,
};

Artist.defaultProps = {
  name: undefined,
};

export default Artist;
