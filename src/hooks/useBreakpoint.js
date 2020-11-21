import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import {
  breakpoints,
  fontSizeValues,
  breakpointsValues,
} from "@utils/constants";

const pxToRem = (px, currentFontSize) =>
  px / fontSizeValues[currentFontSize.toUpperCase()];

const calculateBreakpoint = (width) => {
  const { SM, MD, LG } = breakpointsValues;
  if (width >= LG) {
    return breakpoints.LG;
  } else if (width >= MD && width < LG) {
    return breakpoints.MD;
  } else if (width >= SM && width < MD) {
    return breakpoints.SM;
  } else {
    return breakpoints.XS;
  }
};

const getCurrentBreakpoint = (currentFontSize = "md") => {
  const innerWidth = process.browser ? window.innerWidth : 1400;
  const width = pxToRem(innerWidth, currentFontSize);
  return calculateBreakpoint(width);
};

const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(
    getCurrentBreakpoint()
  );
  const currentFontSize = useSelector(({ config }) => config.fontSize);

  useEffect(() => {
    const updateSize = () => {
      setCurrentBreakpoint(getCurrentBreakpoint(currentFontSize));
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return currentBreakpoint;
};

export default useBreakpoint;

export const useMobile = () => {
  const currentBreakpoint = useBreakpoint();
  const isMobileBreakpoint =
    currentBreakpoint === breakpoints.XS ||
    currentBreakpoint === breakpoints.SM;

  return isMobileBreakpoint;
};
