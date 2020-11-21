import React from "react";

import render from "../../render";
import Input from "@components/Input/Input";

describe("<Input />", () => {
  it("should render snapshot", () => {
    const { renderer } = render({ theme: true, redux: true });
    const component = renderer(<Input value="Hola" />);
    expect(component).toMatchSnapshot();
  });
  it("should onChange", () => {
    const spy = jest.fn();
    const { mount } = render({ theme: true, redux: true });
    const component = mount(<Input placeholder="test" onChange={spy} />);
    component.find("input").simulate("change", "Test");
    expect(spy).toHaveBeenCalled();
  });
});
