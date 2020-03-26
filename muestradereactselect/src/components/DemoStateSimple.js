import React, { Component, Fragment } from "react";
import Select from "react-select";

const options = [
  { value: "rojo", label: "rojo" },
  { value: "azul", label: "azul" },
  { value: "verde", label: "verde" }
];
export default class DemoStates extends Component {
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // Option selected: { value: "rojo", label: "rojo" }
    console.log("Option selected:", selectedOption);
  };

  render() {
    return (
      <Fragment>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={options[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={true}
          name="color"
          options={options}
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }
}
