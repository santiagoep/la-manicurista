import React from "react";

import render from "../../render";
import ConfigWrapper from "@components/ConfigWrapper/ConfigWrapper";

describe("<ConfigWrapper />", () => {
  it("should render snapshot", () => {
    const { renderer } = render({ theme: true, redux: true });
    const component = renderer(
      <ConfigWrapper>
        <h1>Test</h1>
      </ConfigWrapper>
    );
    expect(component).toMatchSnapshot();
  });
});
