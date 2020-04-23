import React from "react";
import { shallow } from "enzyme";
import CartData from "../Cart/CartData";

describe("CartData component test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CartData />);
  });

  it("shallow CartData component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("div props should have className", () => {
    expect(
      wrapper
        .find("div")
        .at(0)
        .hasClass("container-fluid text-center d-none d-lg-block")
    ).toBeTruthy();
    expect(wrapper.find("div").at(1).hasClass("row")).toBeTruthy();
    expect(
      wrapper.find("div").at(2).hasClass("col-10 mx-auto col-lg-2")
    ).toBeTruthy();
    expect(
      wrapper.find("div").at(3).hasClass("col-10 mx-auto col-lg-2")
    ).toBeTruthy();
    expect(
      wrapper.find("div").at(4).hasClass("col-10 mx-auto col-lg-2")
    ).toBeTruthy();
    expect(
      wrapper.find("div").at(5).hasClass("col-10 mx-auto col-lg-2")
    ).toBeTruthy();
    expect(
      wrapper.find("div").at(6).hasClass("col-10 mx-auto col-lg-2")
    ).toBeTruthy();
    expect(
      wrapper.find("div").at(7).hasClass("col-10 mx-auto col-lg-2")
    ).toBeTruthy();
  });

  it("paragraph correct text and className", () => {
    expect(wrapper.find("p").at(0).hasClass("text-uppercase")).toBeTruthy();
    expect(wrapper.find("p").at(0).text()).toEqual("comics");
    expect(wrapper.find("p").at(1).hasClass("text-uppercase")).toBeTruthy();
    expect(wrapper.find("p").at(1).text()).toEqual("name");
    expect(wrapper.find("p").at(2).hasClass("text-uppercase")).toBeTruthy();
    expect(wrapper.find("p").at(2).text()).toEqual("price");
    expect(wrapper.find("p").at(3).hasClass("text-uppercase")).toBeTruthy();
    expect(wrapper.find("p").at(3).text()).toEqual("quantity");
    expect(wrapper.find("p").at(4).hasClass("text-uppercase")).toBeTruthy();
    expect(wrapper.find("p").at(4).text()).toEqual("remove");
    expect(wrapper.find("p").at(5).hasClass("text-uppercase")).toBeTruthy();
    expect(wrapper.find("p").at(5).text()).toEqual("total");
  });
});
