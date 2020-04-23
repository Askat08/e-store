import React from "react";
import { shallow } from "enzyme";
import Footer from "../Footer";
import * as methods from "../../utility/functions";

describe("Footer component test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it("should match to snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render title of app", () => {
    const h3 = wrapper.find("h3");
    const title = h3.text();

    expect(title).toBe("Marvel Comic Books");
  });

  it("should render slogan of the app", () => {
    const h4 = wrapper.find("h4");
    const text = h4.text();

    expect(text).toBe("Get your superhero today.");
  });

  it("should include website link", () => {
    const anchorHref = wrapper.find("a").prop("href");

    expect(anchorHref).toEqual("https://askatb.com");
  });

  it("should test button click", () => {
    const mock = jest.spyOn(methods, "scrollToTop");
    mock.mockReturnValue("scrolled to top");

    wrapper.find("button").props().onClick();

    expect(methods.scrollToTop).toBeCalled();
    expect(methods.scrollToTop()).toBe("scrolled to top");

    mock.mockRestore();
  });
});
