import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import i18n from "@config/translations";
import themes from "@assets/styles/themes";
import BaseStyles from "@assets/styles/BaseStyles";
import childrenProps from "@utils/common-propTypes";

const ConfigWrapper = ({ children }) => {
  const { theme, fontSize, language } = useSelector(({ config }) => config);
  const selectedTheme = themes.find(({ name }) => name === theme);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <BaseStyles fontSize={fontSize} />
      {children}
    </ThemeProvider>
  );
};

ConfigWrapper.propTypes = {
  children: childrenProps.isRequired,
};

export default ConfigWrapper;
