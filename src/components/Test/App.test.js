import React from "react";
import { shallow, mount } from "enzyme";

import App from "../../App";
import Cart from "../Cart/Cart";
import ProductList from "../ProductList";
import * as methods from "../../utility/functions";

describe("App container test", () => {
  const cartMock = [
    { title: "thor", id: 1, count: 1, prices: [{ price: 2.99 }] },
    { title: "loki", id: 2, count: 1, prices: [{ price: 2.25 }] },
    { title: "hulk", id: 3, count: 1, prices: [{ price: 23.99 }] },
    { title: "spider-man", id: 4, count: 1, prices: [{ price: 15.19 }] },
  ];

  const itemsMock = [
    { title: "iron man", id: 5, count: 1, prices: [{ price: 2.99 }] },
    { title: "deadpool", id: 6, count: 1, prices: [{ price: 2.25 }] },
    { title: "daredevil", id: 7, count: 1, prices: [{ price: 23.99 }] },
    { title: "captain America", id: 8, count: 1, prices: [{ price: 15.19 }] },
  ];

  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance(); // assign instance of the wrapper
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render app container", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  // it("should call flashAlert when handleAddtoCart called", () => {
  //   instance.flashAlert = jest.fn();

  //   jest
  //     .spyOn(instance, "handleAddtoCart")
  //     .mockImplementation(() => instance.flashAlert());

  //   wrapper.update();
  //   instance.handleAddtoCart();
  //   expect(instance.flashAlert).toBeCalled();
  //   instance.handleAddtoCart.mockRestore();
  // });

  it("state changes when flashAlert method is called", () => {
    wrapper.instance().flashAlert();
    expect(instance.state.flashAlert).toBeTruthy();
    wrapper.instance().flashAlert();
    expect(instance.state.flashAlert).toBeFalsy();
  });

  it("state changes when onSearchChange method is called", () => {
    jest
      .spyOn(instance, "onSearchChange")
      .mockImplementation((text) => wrapper.setState({ searchfield: text }));

    wrapper.update();
    wrapper.instance().onSearchChange("thor");
    expect(instance.state.searchfield).toBe("thor");
    instance.onSearchChange.mockRestore();
  });

  it("state changes when onSearchChange method is called", () => {
    const e = {
      target: {
        value: "thor",
      },
    };
    jest.spyOn(instance, "onSearchChange");
    wrapper.instance().onSearchChange(e);
    expect(instance.state.searchfield).toEqual("thor");
    expect(instance.onSearchChange).toHaveBeenCalled();
  });

  // it("should run methods with proper arguments when `componentDidMount()`", () => {
  //   jest.spyOn(instance, "countTotalPrice");
  //   jest.spyOn(instance, "fetchData");
  //   instance.componentDidMount();
  //   expect(instance.countTotalPrice).toHaveBeenCalledTimes(1);
  //   expect(instance.fetchData).toHaveBeenCalledTimes(1);
  //   expect(instance.fetchData).toHaveBeenCalledWith(expect.any(String));
  //   instance.countTotalPrice.mockRestore();
  //   instance.fetchData.mockRestore();
  // });

  it("fetch data when`componentDidMount()`", () => {
    jest
      .spyOn(instance, "fetchData")
      .mockImplementation(() =>
        wrapper.setState({ items: ["thor", "loki", "hulk"] })
      );
    wrapper.update();
    instance.componentDidMount();
    expect(instance.fetchData).toBeCalled();
    expect(instance.state.items).toContain("hulk");
    expect(instance.state.items).toContain("loki");
    expect(instance.state.items).toContain("thor");
    expect(instance.state.items).toHaveLength(3);
    instance.fetchData.mockRestore();
  });

  it("fetch data by name when searchClick()", () => {
    jest.spyOn(instance, "onSearchClick").mockImplementation((key, text) => {
      wrapper.setState({ searchfield: text });
      if (key === "Enter" || key === 1) {
        if (instance.state.searchfield) {
          return instance.fetchData(instance.state.searchfield);
        }
      }
    });
    jest.spyOn(instance, "fetchData");
    instance.onSearchClick("Enter", "thor");
    expect(instance.fetchData).toBeCalledWith("thor");
    expect(instance.fetchData).toHaveBeenCalledTimes(1);
    instance.onSearchClick.mockRestore();
    instance.fetchData.mockRestore();
  });

  it("checking if key or detail is correct when searchClick()", () => {
    jest.spyOn(instance, "fetchData");
    const e = {
      key: "Enter",
      detail: 1,
    };
    instance.setState({ searchfield: "thor" });
    instance.onSearchClick(e);
    expect(instance.fetchData).toBeCalled();
  });

  it("gets item by id", () => {
    expect(methods.getItembyId(1, cartMock)).toEqual({
      title: "thor",
      id: 1,
      count: 1,
      prices: [{ price: 2.99 }],
    });
    expect(methods.getItembyId(4, cartMock)).toEqual({
      title: "spider-man",
      id: 4,
      count: 1,
      prices: [{ price: 15.19 }],
    });
  });

  it("should count total price of items in arr", () => {
    instance.countTotalPrice(cartMock);
    expect(instance.state.cartSubTotal).toEqual("44.42");
    expect(instance.state.cartTax).toEqual("3.94");
    expect(instance.state.cartTotal).toEqual("48.36");
  });

  it("should modify count of item in an array", () => {
    let newArr = [];
    newArr = methods.cartItemModifyCount(cartMock, 2, "inc", cartMock);
    expect(newArr[1].count).toEqual(2);
    newArr = methods.cartItemModifyCount(cartMock, 3, "inc", cartMock);
    expect(newArr[2].count).toEqual(2);
    newArr = methods.cartItemModifyCount(cartMock, 2, "inc", cartMock);
    expect(newArr[1].count).toEqual(3);
    newArr = methods.cartItemModifyCount(cartMock, 2, "inc", cartMock);
    expect(newArr[1].count).toEqual(4);
    newArr = methods.cartItemModifyCount(cartMock, 2, "dec", cartMock);
    expect(newArr[1].count).toEqual(3);
    newArr = methods.cartItemModifyCount(cartMock, 2, "add", cartMock);
    expect(newArr[1].count).toEqual(4);
  });

  it("should increment and count total price of items in array", () => {
    const countModifySpy = jest.spyOn(methods, "cartItemModifyCount");
    countModifySpy.mockReturnValue(
      methods.cartItemModifyCount(cartMock, 3, "inc", cartMock)
    );
    const countPriceSpy = jest.spyOn(instance, "countTotalPrice");
    countPriceSpy.mockReturnValue(instance.countTotalPrice(cartMock));
    instance.incrementCount();
    expect(instance.state.cart[2].count).toEqual(3);
    expect(instance.state.cartSubTotal).toEqual("99.15");
    expect(instance.countTotalPrice).toHaveBeenCalled();
    countModifySpy.mockRestore();
    countPriceSpy.mockRestore();
  });

  it("should decrement and count total price of items in array", () => {
    const decountModifySpy = jest.spyOn(methods, "cartItemModifyCount");
    decountModifySpy.mockReturnValue(
      methods.cartItemModifyCount(cartMock, 2, "dec", cartMock)
    );
    const countPriceSpy = jest.spyOn(instance, "countTotalPrice");
    countPriceSpy.mockReturnValue(instance.countTotalPrice(cartMock));
    instance.decrementCount();
    expect(instance.state.cart[1].count).toEqual(3);
    expect(instance.state.cartSubTotal).toEqual("96.90");
    decountModifySpy.mockRestore();
    countPriceSpy.mockRestore();
  });

  it("remove item by ID from array", () => {
    instance.removeItemFromCart(2, cartMock);
    expect(instance.state.cart).toHaveLength(3);
  });

  it("add item to cart and flash alert message", () => {
    jest.spyOn(instance, "flashAlert");
    jest.spyOn(instance, "countTotalPrice");
    jest.spyOn(methods, "setLocalStorage");

    const handleAddtoCartSpy = jest.spyOn(instance, "handleAddtoCart");
    handleAddtoCartSpy.mockImplementation(() => {
      const added = methods.cartItemModifyCount(itemsMock, 6, "add", cartMock);
      instance.countTotalPrice(added);
      methods.setLocalStorage(added);
      instance.flashAlert();

      instance.setState({
        cart: added,
      });
    });

    const addedItem = [
      {
        title: "deadpool",
        id: 6,
        count: 2,
        prices: [{ price: 2.25 }],
      },
    ];

    wrapper.update();
    instance.handleAddtoCart();

    expect(instance.state.cart).toHaveLength(5);
    expect(instance.state.cart).toEqual([...cartMock, ...addedItem]);
    expect(instance.state.flashAlert).toBeTruthy();

    expect(instance.countTotalPrice).toHaveBeenCalledWith([
      ...cartMock,
      ...addedItem,
    ]);

    expect(instance.flashAlert).toHaveBeenCalled();
    expect(methods.setLocalStorage).toHaveBeenCalled();

    handleAddtoCartSpy.mockReset();
  });

  it("will empty cart on handleClearCart()", () => {
    instance.handleClearCart();
    expect(instance.state.cart).toEqual([]);
    instance.setState({ cart: [1, 2, 3, 4, 5, 6, 7, 78] });
    expect(instance.state.cart).toHaveLength(8);
    instance.handleClearCart();
    expect(instance.state.cart).toEqual([]);
  });

  it("Route has proper props", () => {
    expect(wrapper.find("Route").at(2).props().component).toEqual(
      expect.any(Function)
    );
    expect(wrapper.find("Route").at(0).props()).toEqual({
      path: "/",
      exact: true,
      render: expect.any(Function),
    });
    expect(wrapper.find("Route").at(1).props()).toEqual({
      path: "/cart",
      render: expect.any(Function),
    });
  });

  it("ProductList has proper props", () => {
    const mockProps = {
      attributionHTML: "",
      cart: [],
      cartSubTotal: "0.00",
      cartTax: "0.00",
      cartTotal: "0.00",
      flashAlert: false,
      handleAddtoCart: expect.any(Function),
      isError: false,
      items: [],
      onSearchChange: expect.any(Function),
      onSearchClick: expect.any(Function),
      searchfield: "",
    };

    expect(wrapper.find("Route").at(0).props().render()).toEqual(
      <ProductList {...mockProps} />
    );
  });

  it("Cart has proper props", () => {
    const mockProps = {
      attributionHTML: "",
      cart: [],
      cartSubTotal: "0.00",
      cartTax: "0.00",
      cartTotal: "0.00",
      flashAlert: false,
      isError: false,
      items: [],
      searchfield: "",
      decrementCount: expect.any(Function),
      incrementCount: expect.any(Function),
      removeItemFromCart: expect.any(Function),
      handleClearCart: expect.any(Function),
    };

    expect(wrapper.find("Route").at(1).props().render()).toEqual(
      <Cart {...mockProps} />
    );
  });
});
