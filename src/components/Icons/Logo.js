import React from "react";

import styled from "styled-components";

const StyledImage = styled.img`
  max-width: 100%;
`;

const Logo = () => (
  <StyledImage
    src="https://lamanicurista.com/wp-content/uploads/2019/01/Logo-La-manicurista-1.png"
    alt="LaManicurista Logo"
  />
);

export default Logo;
