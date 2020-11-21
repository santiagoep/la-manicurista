import React from "react";

import Logo from "@components/Icons/Logo";
import childrenProps from "@utils/common-propTypes";
import Accessibility from "@components/Accessibility/Accessibility";
import { StyledContainer, StyledTitleContainer } from "./MainLayout.styled";

const MainLayout = ({ children }) => (
  <StyledContainer>
    <Accessibility />
    <StyledTitleContainer>
      <Logo />
    </StyledTitleContainer>
    {children}
  </StyledContainer>
);

MainLayout.propTypes = {
  children: childrenProps.isRequired,
};

export default MainLayout;
