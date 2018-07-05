import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Home from "./containers/Home";
import Weather from "./containers/Weather";
import Crud from "./containers/Crud";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/weather" component={Weather} />
          <Route path="/crud" component={Crud} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
