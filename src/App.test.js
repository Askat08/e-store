import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import App from "./App";

describe("App container test", () => {
  test("should render app", () => {
    const wrapper = shallow(<App />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  test("should run fetchData function", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().fleshAlert());
  });
});
