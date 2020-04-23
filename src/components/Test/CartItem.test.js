import React from "react";
import { shallow } from "enzyme";
import CartItem from "../Cart/CartItem";

const itemMock = {
  id: 23,
  title: "deadpool",
  thumbnail: { path: "http://file/path", extension: "jpg" },
  prices: [{ price: 2.99 }],
  count: 3,
};

const itemsArrayMock = [
  { title: "iron man", id: 5, count: 1, prices: [{ price: 2.99 }] },
  { title: "deadpool", id: 6, count: 1, prices: [{ price: 2.25 }] },
  { title: "daredevil", id: 7, count: 1, prices: [{ price: 23.99 }] },
  { title: "captain America", id: 8, count: 1, prices: [{ price: 15.19 }] },
];

const propsMock = {
  decrementCount: () => (itemMock.count = itemMock.count - 1),
  incrementCount: () => (itemMock.count = itemMock.count + 1),
  removeItemFromCart: () => itemsArrayMock.pop(),
};

describe("CartItem component test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CartItem item={itemMock} props={propsMock} />);
  });

  it("should render CartItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("all div's has proper props", () => {
    expect(
      wrapper.find("div").at(0).hasClass("row my-2 text-capitilize text-center")
    ).toBeTruthy();
    expect(wrapper.find("div").at(1).props().className).toEqual(
      "col-10 mx-auto col-lg-2"
    );
    expect(
      wrapper.find("div").at(2).hasClass("col-10 mx-auto col-lg-2")
    ).toBeTruthy();
    expect(
      wrapper.find("div").at(3).hasClass("col-10 mx-auto col-lg-2")
    ).toBeTruthy();
    expect(
      wrapper.find("div").at(4).hasClass("col-10 mx-auto col-lg-2 my-2 my-lg-0")
    ).toBeTruthy();
    expect(
      wrapper.find("div").at(5).hasClass("d-flex justify-content-center")
    ).toBeTruthy();
    expect(
      wrapper.find("div").at(7).hasClass("col-10 mx-auto col-lg-2")
    ).toBeTruthy();
    expect(wrapper.find("div").at(8).props().style).toEqual(expect.any(Object));
    expect(wrapper.find("div").at(8).props().onClick).toEqual(
      expect.any(Function)
    );
    expect(
      wrapper.find("div").at(9).hasClass("col-10 mx-auto col-lg-2")
    ).toBeTruthy();
  });

  it("image should have all props", () => {
    expect(wrapper.find("img").props()).toEqual({
      className: "img-fluid",
      src: expect.any(String),
      alt: itemMock.title,
      style: {
        height: "5rem",
        width: "5rem",
      },
    });
  });

  it("span should have all props", () => {
    expect(wrapper.find("span").at(0).hasClass("d-lg-none")).toBeTruthy();
    expect(wrapper.find("span").at(0).text()).toEqual("Comic : ");
    expect(wrapper.find("span").at(1).hasClass("d-lg-none")).toBeTruthy();
    expect(wrapper.find("span").at(1).text()).toEqual("Price : ");
    expect(
      wrapper.find("span").at(2).hasClass("btn btn-cart mx-1")
    ).toBeTruthy();
    expect(wrapper.find("span").at(2).props().onClick).toEqual(
      expect.any(Function)
    );
    expect(wrapper.find("span").at(2).text()).toEqual("-");
    expect(
      wrapper.find("span").at(3).hasClass("btn btn-cart mx-1")
    ).toBeTruthy();
    expect(
      wrapper.find("span").at(4).hasClass("btn btn-cart mx-1")
    ).toBeTruthy();
    expect(wrapper.find("span").at(4).props().onClick).toEqual(
      expect.any(Function)
    );
    expect(wrapper.find("span").at(4).text()).toEqual("+");
  });

  it("strong should have contain proper text", () => {
    expect(wrapper.find("strong").at(0).text()).toEqual(
      "$" + itemMock.prices[0].price
    );
    expect(wrapper.find("strong").at(1).text()).toEqual(
      "Item total : $ " + (itemMock.prices[0].price * itemMock.count).toFixed(2)
    );
  });

  it("onClick method should call callback", () => {
    const item = {
      title: "iron man",
      id: 5,
      count: 1,
      prices: [{ price: 2.99 }],
    };
    wrapper.find("span").at(2).props().onClick(); // decrement count
    expect(itemMock.count).toEqual(2);
    wrapper.find("span").at(4).props().onClick(); // increment count
    expect(itemMock.count).toEqual(3);
    wrapper.find("div").at(8).props().onClick(); // remove item
    expect(itemsArrayMock.length).toEqual(3);
    wrapper.find("div").at(8).props().onClick(); // remove item
    expect(itemsArrayMock.length).toEqual(2);
  });
});
