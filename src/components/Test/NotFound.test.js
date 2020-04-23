import React from "react";
import { shallow, mount } from "enzyme";
import NotFound from "../NotFound";

describe("NotFound component test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NotFound />);
  });

  it("should render Not Found component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should onclick invoke input callback", () => {
    const img = wrapper.find("img");
    expect(img.props().src).toEqual("404.png");
  });
});
