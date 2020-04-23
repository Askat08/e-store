import React from "react";
import { shallow } from "enzyme";
import Alert from "../Alert";

describe("Alert component test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Alert />);
  });
  it("should render Alert component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have same style for div", () => {
    const style = wrapper.find("div").get(0).props.style;
    expect(style).toHaveProperty("position", "fixed");
    expect(style).toHaveProperty("top", "10px");
    expect(style).toHaveProperty("right", "");
    expect(style).toHaveProperty("fontSize", "2rem");
    expect(style).toHaveProperty("background", "lightgreen");
    expect(style).toHaveProperty("width", "100%");
    expect(style).toHaveProperty("zIndex", "100");
    expect(style).toHaveProperty("textAlign", "center");
    expect(style).toHaveProperty("opacity", "0.9");
    expect(style).toHaveProperty("transition", "opacity 0.1s ease-out");
  });

  it("should test h3 text", () => {
    expect(wrapper.find("h3").text()).toEqual(
      "Hooray! Comic book in your cart."
    );
  });
});
