import { useDispatch, useSelector } from "react-redux";

import { themes } from "@utils/constants";
import configActions from "@reducers/config";

const useConfig = () => {
  const dispatch = useDispatch();
  const { fontSize, theme, language } = useSelector(({ config }) => config);

  const setFontSize = (newFontSize) => {
    dispatch(configActions.changeFontSize(newFontSize));
  };

  const toggleLanguage = () => {
    dispatch(configActions.toggleLanguage());
  };

  const toggleTheme = () => {
    dispatch(configActions.toggleTheme());
  };

  return [
    { fontSize, theme, language },
    { setFontSize, toggleLanguage, toggleTheme },
  ];
};

export const useLight = () => {
  const [{ theme }] = useConfig();
  const isLight = themes.LIGHT === theme;
  return isLight;
};

export const useDark = () => {
  const [{ theme }] = useConfig();
  const isDark = themes.DARK === theme;
  return isDark;
};

export default useConfig;
