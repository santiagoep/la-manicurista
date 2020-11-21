import React from "react";

import render from "../../render";
import Music from "@components/Icons/Music";

describe("<Music />", () => {
  it("should render snapshot", () => {
    const { renderer } = render({ theme: true });
    const component = renderer(<Music />);
    expect(component).toMatchSnapshot();
  });
});
