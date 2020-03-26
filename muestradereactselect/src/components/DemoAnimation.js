import React, { Component, Fragment } from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const options = [
  { value: "rojo", label: "rojo" },
  { value: "azul", label: "azul" },
  { value: "verde", label: "verde" },
  { value: "blanco", label: "blanco" }
];

const animatedComponents = makeAnimated();

export default class DemoAnimation extends Component {
  render() {
    return (
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[options[1], options[2]]}
        isMulti
        options={options}
      />
    );
  }
}
