import React from "react";
import { shallow } from "enzyme";
import Navbar from "../Navbar";

describe("Navbar component test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it("should render Navbar component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should test for Navbar logo", () => {
    const img = wrapper.find("img");
    expect(img.props().src).toEqual("logo.svg");
  });

  it("should test cart icon inside button", () => {
    const button = wrapper.find("button");
    expect(button.contains(<i className="fas fa-cart-arrow-down" />)).toEqual(
      true
    );
  });

  it("includes link to Mission scene", () => {
    expect(wrapper.find("Link").at(0).props().to).toBe("/");
    expect(wrapper.find("Link").at(1).props().to).toBe("/");
    expect(wrapper.find("Link").at(2).props().to).toBe("/cart");
  });

  it("should test h4 text", () => {
    expect(wrapper.find("h4").text()).toEqual("comics");
  });
});
