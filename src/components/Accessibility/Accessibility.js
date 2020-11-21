import React, { useState } from "react";

import useConfig from "@hooks/useConfig";
import { fontSizes } from "@utils/constants";
import { StyledContainer, StyledItem } from "./Accessibility.styled";

const Accessibility = () => {
  const [currentFontSize, setCurrentFontSize] = useState(1);
  const [
    { fontSize, theme, language },
    { setFontSize, toggleLanguage, toggleTheme },
  ] = useConfig();

  const toggleFontSize = () => {
    const fontSizesArr = Object.values(fontSizes);
    if (fontSizesArr[currentFontSize + 1]) {
      setFontSize(fontSizesArr[currentFontSize + 1]);
      setCurrentFontSize(currentFontSize + 1);
    } else {
      setFontSize(fontSizesArr[0]);
      setCurrentFontSize(0);
    }
  };

  return (
    <StyledContainer>
      <StyledItem onClick={toggleFontSize}>
        Tamaño de fuente: {fontSize}
      </StyledItem>
      <StyledItem onClick={toggleTheme}>Tema: {theme}</StyledItem>
      <StyledItem onClick={toggleLanguage}>Idioma: {language}</StyledItem>
    </StyledContainer>
  );
};

export default Accessibility;
