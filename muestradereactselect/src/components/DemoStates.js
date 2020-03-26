import React, { Component, Fragment } from "react";
import Select from "react-select";

const options = [
  { value: "rojo", label: "rojo" },
  { value: "azul", label: "azul" },
  { value: "verde", label: "verde" }
];
const Checkbox = props => <input type="checkbox" {...props} />;
export default class DemoStates extends Component {
  state = {
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
    isSearchable: true,
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // Option selected: { value: "rojo", label: "rojo" }
    console.log("Option selected:", selectedOption);
  };

  toggleClearable = () =>
    this.setState(state => ({ isClearable: !state.isClearable }));
  toggleDisabled = () =>
    this.setState(state => ({ isDisabled: !state.isDisabled }));
  toggleLoading = () =>
    this.setState(state => ({ isLoading: !state.isLoading }));
  toggleRtl = () => this.setState(state => ({ isRtl: !state.isRtl }));
  toggleSearchable = () =>
    this.setState(state => ({ isSearchable: !state.isSearchable }));
  render() {
    const {
      isClearable,
      isSearchable,
      isDisabled,
      isLoading,
      isRtl
    } = this.state;
    return (
      <Fragment>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={options[0]}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          name="color"
          options={options}
          onChange={this.handleChange}
        />
        <Checkbox
          checked={isClearable}
          onChange={this.toggleClearable}
          id="cypress-single__clearable-checkbox"
        />
        Clearable
        <Checkbox
          checked={isSearchable}
          onChange={this.toggleSearchable}
          id="cypress-single__searchable-checkbox"
        />
        Searchable
        <Checkbox
          checked={isDisabled}
          onChange={this.toggleDisabled}
          id="cypress-single__disabled-checkbox"
        />
        Disabled
        <Checkbox
          checked={isLoading}
          onChange={this.toggleLoading}
          id="cypress-single__loading-checkbox"
        />
        Loading
        <Checkbox
          type="checkbox"
          checked={isRtl}
          onChange={this.toggleRtl}
          id="cypress-single__rtl-checkbox"
        />
        RTL
      </Fragment>
    );
  }
}
