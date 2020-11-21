import React from "react";

import render from "../../render";
import Artist from "@components/Artist/Artist";
import artistsMock from "@__mocks__/components/artists.mock";

describe("<Artist />", () => {
  it("should render snapshot", () => {
    const { renderer } = render({ theme: true, redux: true });
    const component = renderer(<Artist {...artistsMock[0]} />);
    expect(component).toMatchSnapshot();
  });
});
