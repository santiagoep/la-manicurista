import React from "react";

import { StyledContainer, StyledInput } from "./Input.styled";

const Input = (props) => (
  <StyledContainer>
    <StyledInput {...props} type="text" />
  </StyledContainer>
);

export default Input;
