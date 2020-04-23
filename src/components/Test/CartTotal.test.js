import React from "react";
import { Link } from "react-router-dom";
import { shallow } from "enzyme";
import CartTotal from "../Cart/CartTotal";

const propsMock = {
  cartTax: 23,
  cartTotal: 13,
  cartSubTotal: 43,
  title: "deadpool",
  count: 3,
  handleClearCart: jest.fn(),
};

describe("CartTotal component test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CartTotal
        props={propsMock}
        handleClearCart={propsMock.handleClearCart}
      />
    );
  });

  it("should render CartTotal component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("all div's has proper props", () => {
    expect(wrapper.find("div").at(0).hasClass("container")).toBeTruthy();
    expect(wrapper.find("div").at(1).hasClass("row")).toBeTruthy();
    expect(
      wrapper
        .find("div")
        .at(2)
        .hasClass(
          "col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitilize"
        )
    ).toBeTruthy();
  });

  it("Link has proper route link", () => {
    expect(wrapper.find(Link).props().to).toEqual("/");
  });

  it("button props should pass", () => {
    expect(
      wrapper
        .find("button")
        .hasClass("btn btn-outline-danger text-uppercase mb-3 px-5")
    ).toBeTruthy();
    expect(wrapper.find("button").prop("type")).toEqual("button");
    expect(wrapper.find("button").prop("onClick")).toEqual(
      expect.any(Function)
    );
  });

  it("button click", () => {
    wrapper.find("button[type='button']").prop("onClick")();
    expect(propsMock.handleClearCart).toHaveBeenCalled();
  });

  it("span has proper props", () => {
    expect(wrapper.find("span").at(0).hasClass("text-info")).toBeTruthy();
    expect(wrapper.find("span").at(0).text()).toEqual("subtotal : ");
    expect(wrapper.find("span").at(1).hasClass("text-info")).toBeTruthy();
    expect(wrapper.find("span").at(1).text()).toEqual("tax* : ");
    expect(wrapper.find("span").at(2).hasClass("text-info")).toBeTruthy();
    expect(wrapper.find("span").at(2).text()).toEqual("total : ");
  });

  it("has paragraph text", () => {
    expect(wrapper.find("p").text()).toEqual(
      "*New York State Sales Tax 8.875%"
    );
  });
});
