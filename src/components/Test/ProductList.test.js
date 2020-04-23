import React from "react";
import { shallow, mount } from "enzyme";
import ProductList from "../ProductList";
import SearchBox from "../SearchBox";

const props = {
  items: [],
  handleAddtoCart: () => true,
  messageAlert: false,
  isError: false,
  onSearchChange: () => true,
  onSearchClick: () => true,
  searchfield: "",
};

describe("ProductList component test", () => {
  it("should render ProductList component", () => {
    const wrapper = mount(<ProductList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have proper props for div", () => {
    const wrapper = shallow(<ProductList {...props} />);
    expect(wrapper.find("div").at(0).props().className).toEqual(
      "d-flex align-items-center justify-content-center"
    );

    expect(
      wrapper
        .find("div")
        .at(1)
        .containsMatchingElement(
          <SearchBox
            onSearchChange={props.onSearchChange}
            searchField={props.searchfield}
            onSearchClick={props.onSearchClick}
          />
        )
    ).toBeTruthy();

    expect(wrapper.find("div").at(2).props()).toEqual({
      className: "spinner-border m-5",
      role: "status",
      "aria-hidden": "true",
    });
  });

  it("should have proper children for div", () => {
    const wrapper = shallow(<ProductList {...props} />);
    expect(wrapper.find("div").at(0).childAt(0).type()).toEqual("div");
    expect(wrapper.find("div").at(0).childAt(1).type()).toEqual("strong");
    expect(wrapper.find("div").at(0).childAt(2).type()).toEqual("div");
  });
});
