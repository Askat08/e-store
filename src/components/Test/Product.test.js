import React from "react";
import { shallow, mount } from "enzyme";
import Product from "../Product";
import Modal from "react-bootstrap/Modal";

const mockProps = {
  title: "comic",
  path: "http://path/to/image",
  ext: "jpg",
  id: 1,
  price: 12,
  description: "Superhero comic",
  cart: [],
  items: [],
  show: false,
};
const httpsMock = Array.from(mockProps.path);
// adding 's' to http on image url
httpsMock.splice(4, 0, "s");

describe("Product component test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Product {...mockProps} />);
  });

  it("should render Product component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("button contains proper icon", () => {
    const button = wrapper.find("button");
    expect(button.contains(<i className="fas fa-cart-plus" />)).toBeTruthy();
  });

  it("paragraph has proper content", () => {
    const price = wrapper.find("p").at(0);
    const title = wrapper.find("p").at(1);
    expect(price.contains("$ " + mockProps.price)).toBeTruthy();
    expect(title.contains(mockProps.title)).toBeTruthy();
  });

  it("strong has proper content", () => {
    expect(wrapper.find("strong").text()).toEqual(
      mockProps.price <= 0 ? "free" : "$ " + mockProps.price
    );
  });

  it("should have proper props for image", () => {
    expect(wrapper.find("img[name='product-img']").props()).toEqual({
      name: "product-img",
      className: "figure-img img-fluid rounded",
      onClick: expect.any(Function),
      src: httpsMock.join("") + "." + mockProps.ext,
      alt: mockProps.title,
    });
    expect(wrapper.find("img").at(1).props()).toEqual({
      style: { width: "100%" },
      src: httpsMock.join("") + "." + mockProps.ext,
      alt: mockProps.title,
    });
  });

  it("button has proper props", () => {
    expect(
      wrapper.find("button").hasClass("btn-cart text-info shadow-none w-100")
    ).toBeTruthy();
    expect(wrapper.find("button").props().type).toEqual("button");
    expect(wrapper.find("button").props().onClick).toEqual(
      expect.any(Function)
    );
  });

  it("should test button onClick ", () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(
      <Product handleAddtoCart={mockFunc} {...mockProps} />
    );

    wrapper.find("button[type='button']").invoke("onClick")();
    expect(mockFunc).toHaveBeenCalledWith(
      mockProps.id,
      mockProps.cart,
      mockProps.items
    );
  });

  it("should test handleShow and handleHide methods ", () => {
    wrapper.find("img[name='product-img']").invoke("onClick")();
    expect(wrapper.find(Modal).props().show).toBeTruthy();

    wrapper.find(Modal).invoke("onHide")();
    expect(wrapper.find(Modal).props().show).toBeFalsy();

    wrapper.find("img[name='product-img']").invoke("onClick")();
    expect(wrapper.find(Modal).props().show).toBeTruthy();
  });

  it("modal has proper props", () => {
    expect(wrapper.find(Modal.Header).hasClass("bg-warning")).toBeTruthy();
    expect(wrapper.find(Modal.Header).prop("closeButton")).toBeTruthy();
    expect(wrapper.find(Modal.Title).text()).toEqual(mockProps.title);
    expect(wrapper.find("p").at(2).hasClass("lead m-5 px-3")).toBeTruthy();
    expect(wrapper.find("small").hasClass("bg-warning")).toBeTruthy();
    expect(wrapper.find("small").text()).toEqual(mockProps.description);
  });
});
