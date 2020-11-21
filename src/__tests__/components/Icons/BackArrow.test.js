import React from "react";

import render from "../../render";
import BackArrow from "@components/Icons/BackArrow";

describe("<BackArrow />", () => {
  it("should render snapshot", () => {
    const { renderer } = render({ theme: true });
    const component = renderer(<BackArrow />);
    expect(component).toMatchSnapshot();
  });
});
