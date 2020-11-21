import React from "react";

import render from "../../render";
import Accessibility from "@components/Accessibility/Accessibility";

describe("<Accessibility />", () => {
  it("should render snapshot", () => {
    const { renderer } = render({ theme: true, redux: true });
    const component = renderer(<Accessibility />);
    expect(component).toMatchSnapshot();
  });
  it("should render click on fontSize", () => {
    const { mount } = render({ theme: true, redux: true });
    const component = mount(<Accessibility />);
    component.find(".accessibility__font-size").first().simulate("click");
    expect(component).toMatchSnapshot();
  });
  it("should render click on theme", () => {
    const { mount } = render({ theme: true, redux: true });
    const component = mount(<Accessibility />);
    component.find(".accessibility__theme").first().simulate("click");
    expect(component).toMatchSnapshot();
  });
  it("should render click on language", () => {
    const { mount } = render({ theme: true, redux: true });
    const component = mount(<Accessibility />);
    component.find(".accessibility__language").first().simulate("click");
    expect(component).toMatchSnapshot();
  });
});
