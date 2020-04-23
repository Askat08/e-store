import React from "react";
import { shallow } from "enzyme";
import CartEmpty from "../Cart/CartEmpty";

describe("CartEmpty component test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CartEmpty />);
  });

  it("shallow CartEmpty component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("div has proper classname", () => {
    expect(wrapper.find("div").at(0).hasClass("conainer m-5")).toBeTruthy();
    expect(wrapper.find("div").at(1).hasClass("row")).toBeTruthy();
    expect(
      wrapper.find("div").at(2).hasClass("col-10 mx-auto text-center")
    ).toBeTruthy();
  });

  it("h1 has correct text", () => {
    expect(wrapper.find("h1").text()).toEqual("Cart is empty");
  });
});
