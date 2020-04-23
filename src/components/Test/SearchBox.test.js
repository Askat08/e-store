import React from "react";
import { shallow, mount } from "enzyme";
import SearchBox from "../SearchBox";

describe("SearchBox component test", () => {
  it("should render app", () => {
    const wrapper = shallow(<SearchBox />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should onclick invoke input callback", () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<SearchBox onSearchClick={onClickMock} />);
    wrapper.find("input").simulate("keypress", { key: "Enter" });
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should onchange invoke input callback", () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(<SearchBox onSearchChange={onChangeMock} />);
    wrapper.find("input").simulate("change", "thanos");
    expect(onChangeMock).toBeCalledWith("thanos");
  });

  it("should onclick invoke button callback", () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<SearchBox onSearchClick={onClickMock} />);
    wrapper.find("button").simulate("click");
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should match with button content", () => {
    const wrapper = shallow(<SearchBox />);
    const button = wrapper.find("button");
    expect(button.contains(<i className="fa fa-search"></i>)).toEqual(true);
  });
});
