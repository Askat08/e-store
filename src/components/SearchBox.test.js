import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import SearchBox from "./SearchBox";

const simulateInputChange = (wrapper, inputSearch, newValue) => {
  let input = wrapper.find(inputSearch);
  input.simulate("change", {
    target: { value: newValue },
  });
  return wrapper.find(inputSearch);
};

describe("SearchBox component test", () => {
  test("should render app", () => {
    const wrapper = shallow(<SearchBox onChange={simulateInputChange} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  test("should render app", () => {
    // const wrapper = shallow(<SearchBox />);
    // const searchInput = simulateInputChange(wrapper, "input", "thor");
    // expect(searchInput.prop("value")).toEqual("");
  });
});
