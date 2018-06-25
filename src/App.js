import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
