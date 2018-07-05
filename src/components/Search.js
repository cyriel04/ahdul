import React, { Component } from "react";
import { Input, Form, Button } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { searchIt } from "../actions";

class Search extends Component {
  state = {
    search: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = this.state.search;
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${data},ph&appid=9fd4c6f879549e6a99fd0947462c4879`;
    axios(url).then(request => this.props.searchIt(request.data));
    this.setState({
      search: ""
    });
  };
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
          <Input
            name="search"
            placeholder="Search city here"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

Search.propTypes = {
  searchIt: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      searchIt: data => searchIt(data)
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(Search);
