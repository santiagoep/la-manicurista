import React from "react";

import render from "../../render";
import Artists from "@components/Artists/Artists";
import artistsMock from "@__mocks__/components/artists.mock";

describe("<Artists />", () => {
  it("should render snapshot", () => {
    const { renderer } = render({ theme: true, redux: true });
    const component = renderer(<Artists artists={artistsMock} />);
    expect(component).toMatchSnapshot();
  });
});
