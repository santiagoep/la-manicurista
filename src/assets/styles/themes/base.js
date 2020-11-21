import spacing from "@utils/styles/spacing";
import { breakpointsValues, fontSizeValues } from "@utils/constants";

export default {
  font: {
    size: {
      h1: "3.75rem",
      h2: "3rem",
      h3: "2.5rem",
      h4: "2.25rem",
      h5: "1.625rem",
      h6: "1.5rem",
      subtitle1: "1.1375rem",
      subtitle2: "1.25rem",
      subtitle3: "1.375rem",
      paragraph1: "1.125rem",
      paragraph2: "1rem",
      paragraph3: "0.875rem",
      caption: "0.75rem",
      help: "0.625em",
      small: "0.5rem",
      sm: `${fontSizeValues.SM}px`,
      md: `${fontSizeValues.MD}px`,
      lg: `${fontSizeValues.LG}px`,
    },
  },
  breakpoints: {
    xs: `@media only screen and (min-width: ${breakpointsValues.XS}em)`,
    sm: `@media only screen and (min-width: ${breakpointsValues.SM}em)`,
    md: `@media only screen and (min-width: ${breakpointsValues.MD}em)`,
    lg: `@media only screen and (min-width: ${breakpointsValues.LG}em)`,
  },
  utils: {
    spacing,
  },
};
