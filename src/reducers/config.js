import { createReducer, createActions } from "reduxsauce";

import { fontSizes, themes, languages } from "@utils/constants";

const { Types, Creators } = createActions({
  changeFontSize: ["fontSize"],
  toggleTheme: [],
  toggleLanguage: [],
});

export default Creators;

export const INITIAL_STATE = {
  fontSize: fontSizes.MD,
  theme: themes.DARK,
  language: languages.ES,
};

export const changeFontSize = (state, { fontSize }) => ({
  ...state,
  fontSize,
});

export const toggleTheme = (state) => ({
  ...state,
  theme: state.theme === themes.LIGHT ? themes.DARK : themes.LIGHT,
});

export const toggleLanguage = (state) => ({
  ...state,
  language: state.language === languages.ES ? languages.EN : languages.ES,
});

export const HANDLERS = {
  [Types.CHANGE_FONT_SIZE]: changeFontSize,
  [Types.TOGGLE_THEME]: toggleTheme,
  [Types.TOGGLE_LANGUAGE]: toggleLanguage,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
