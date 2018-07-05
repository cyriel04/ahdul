import React, { Component } from "react";
import Search from "../components/Search";
import List from "../components/List";

export default class Weather extends Component {
  render() {
    return (
      <div style={{ paddingTop: 100 }}>
        <Search />
        <List />
      </div>
    );
  }
}
