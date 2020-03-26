import React from "react";
import chroma from "chroma-js";

import Select from "react-select";

const options = [
  { value: "red", label: "rojo", color: "#FF5630" },
  { value: "blue", label: "azul", color: "#0052CC" },
  { value: "green", label: "verde", color: "#36B37E" },
  { value: "orange", label: "naranja", color: "#FF8B00" }
];

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css())
      }
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css()
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white"
    }
  })
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    defaultValue={[options[0], options[1]]}
    isMulti
    options={options}
    styles={colourStyles}
  />
);
