import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer component test", () => {
  it("should render title of app", () => {
    const wrapper = shallow(<Footer />);
    const h3 = wrapper.find("h3");
    const title = h3.text();

    expect(title).toBe("Marvel Comic Books");
  });

  it("should render slogan of the app", () => {
    const wrapper = shallow(<Footer />);
    const h4 = wrapper.find("h4");
    const text = h4.text();

    expect(text).toBe("Get your superhero today.");
  });

  it("should include website link", () => {
    const wrapper = shallow(<Footer />);
    const anchorHref = wrapper.find("a").prop("href");

    expect(anchorHref).toEqual("https://askatb.com");
  });

  it("should test button click", () => {
    const wrapper = shallow(<Footer />);
    const button = wrapper.find("button");
    // button.simulate("click");
  });
});
