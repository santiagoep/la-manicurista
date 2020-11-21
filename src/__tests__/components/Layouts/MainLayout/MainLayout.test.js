import React from "react";

import render from "../../../render";
import MainLayout from "@components/Layouts/MainLayout/MainLayout";

describe("<MainLayout />", () => {
  it("should render snapshot", () => {
    const { renderer } = render({ theme: true, redux: true });
    const component = renderer(
      <MainLayout>
        <h1>Test</h1>
      </MainLayout>
    );
    expect(component).toMatchSnapshot();
  });
});
