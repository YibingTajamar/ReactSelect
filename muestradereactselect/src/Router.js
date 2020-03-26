import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DemoStates from "./components/DemoStates";
import DemoSelectMultiple from "./components/DemoSelectMultiple";
import DemoAnimation from "./components/DemoAnimation";
import DemoEstilo from "./components/DemoEstilo";
import DemoEstiloMultiple from "./components/DemoEstiloMultiple";
import DemoAsync from "./components/DemoAsync";
import DemoCreaTable from "./components/DemoCreaTable";
import DemoOpcionFijo from "./components/DemoOpcionFijo";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={DemoStates}></Route>
            <Route
              exact
              path="/multiple"
              component={DemoSelectMultiple}
            ></Route>
            <Route exact path="/animacion" component={DemoAnimation}></Route>
            <Route exact path="/estilo" component={DemoEstilo}></Route>
            <Route
              exact
              path="/estiloMultiple"
              component={DemoEstiloMultiple}
            ></Route>
            <Route exact path="/async" component={DemoAsync}></Route>
            <Route exact path="/creaTable" component={DemoCreaTable}></Route>
            <Route exact path="/opcionfijo" component={DemoOpcionFijo}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
