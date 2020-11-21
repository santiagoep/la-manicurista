import base from "./base";
import colors from "./colors";
import { themes } from "@utils/constants";

export default {
  ...base,
  name: themes.DARK,
  searchTrack: {
    colors: {
      inputBorder: colors.rose,
      titleBg: colors.white,
      titleColor: colors.gray,
    },
    paginator: {
      colors: {
        font: colors.gray,
        controls: colors.rose,
        controlsFont: colors.white,
        active: colors.rose,
      },
    },
  },
  track: {
    colors: {
      font: colors.indigoDye,
      hover: colors.danube,
    },
  },
  artist: {
    colors: {
      font: colors.gray,
    },
  },
};
