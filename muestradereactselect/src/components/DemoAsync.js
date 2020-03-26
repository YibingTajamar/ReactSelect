import React, { Component } from "react";

import AsyncSelect from "react-select/async";
const options = [
  { value: "red", label: "rojo", color: "#FF5630" },
  { value: "blue", label: "azul", color: "#0052CC" },
  { value: "green", label: "verde", color: "#36B37E" },
  { value: "orange", label: "naranja", color: "#FF8B00" }
];

const filterColors = inputValue => {
  return options.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

export default class DemoAsync extends Component {
  state = { inputValue: "" };
  handleInputChange = newValue => {
    // const inputValue = newValue.replace(, "");
    this.setState({ newValue });
    return newValue;
  };
  render() {
    return (
      <div>
        <pre>inputValue: "{this.state.inputValue}"</pre>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}
