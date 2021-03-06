import React, { Component } from "react";

import Select from "react-select";
const options = [
  { value: "red", label: "rojo", color: "#FF5630", isFixed: true },
  { value: "blue", label: "azul", color: "#0052CC" },
  { value: "green", label: "verde", color: "#36B37E" },
  { value: "orange", label: "naranja", color: "#FF8B00" }
];

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  }
};

const orderOptions = values => {
  return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed));
};

export default class DemoOpcionFijo extends Component {
  state = {
    value: orderOptions([options[0], options[1], options[3]])
  };

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(value, { action, removedValue }) {
    switch (action) {
      case "remove-value":
      case "pop-value":
        if (removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        value = options.filter(v => v.isFixed);
        break;
    }

    value = orderOptions(value);
    this.setState({ value: value });
  }

  render() {
    return (
      <Select
        value={this.state.value}
        isMulti
        styles={styles}
        isClearable={this.state.value.some(v => !v.isFixed)}
        name="colors"
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={this.onChange}
        options={options}
      />
    );
  }
}
