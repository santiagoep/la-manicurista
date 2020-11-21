import React from "react";

import render from "../../render";
import Logo from "@components/Icons/Logo";

describe("<Logo />", () => {
  it("should render snapshot", () => {
    const { renderer } = render({ theme: true });
    const component = renderer(<Logo />);
    expect(component).toMatchSnapshot();
  });
});
