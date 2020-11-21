import React from "react";

import render from "../../render";
import Paginator from "@components/Paginator/Paginator";

describe("<Paginator>", () => {
  it("should render snapshot", () => {
    const { mount } = render({ theme: true, redux: true });
    const testFn = jest.fn();
    const component = mount(
      <Paginator pageCount={30} onPageChange={() => testFn()} />
    );
    expect(component).toMatchSnapshot();
  });

  it("Test on change Function", () => {
    const { mount } = render({ theme: true, redux: true });
    const spy = jest.fn();
    const component = mount(
      <Paginator pageCount={30} onPageChange={() => spy()} />
    );
    const button = component.find(".break-me a");
    button.simulate("click");
    expect(spy).toHaveBeenCalled();
  });
});
