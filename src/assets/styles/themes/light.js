import base from "./base";
import colors from "./colors";
import { themes } from "@utils/constants";

export default {
  ...base,
  name: themes.LIGHT,
  colors: {
    borders: {
      primary: colors.rose,
      secondary: colors.danube,
      active: colors.rose,
    },
    bg: {
      primary: colors.rose,
      secondary: colors.indigoDye,
      tertiary: colors.white,
      quaternary: colors.gray,
      quinary: colors.danube,
      playerHeader: colors.transparentGray,
    },
    font: {
      primary: colors.rose,
      secondary: colors.indigoDye,
      tertiary: colors.gray,
      quaternary: colors.white,
      quinary: colors.mineShaft,
      active: colors.rose,
      danger: colors.red,
    },
  },
};
