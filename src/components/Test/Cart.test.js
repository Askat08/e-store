import React from "react";
import { shallow } from "enzyme";
import Cart from "../Cart/Cart";

const propsMock = {
  cart: [
    { title: "thor", id: 1, count: 1, prices: [{ price: 2.99 }] },
    { title: "loki", id: 2, count: 1, prices: [{ price: 2.25 }] },
    { title: "hulk", id: 3, count: 1, prices: [{ price: 23.99 }] },
    { title: "spider-man", id: 4, count: 1, prices: [{ price: 15.19 }] },
  ],
};

describe("Cart component test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Cart {...propsMock} />);
  });

  it("shallow Cart component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("h3 has proper classname and text", () => {
    expect(wrapper.find("h3").hasClass("m-5 text-center")).toBeTruthy();
    expect(wrapper.find("h3").text()).toEqual("Comics in cart");
  });
});
