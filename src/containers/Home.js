import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table, Button, Modal, Input } from "antd";
import { bindActionCreators } from "redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/fontawesome-free-solid";
import { appStart, addData } from "../actions";
import Login from "./Login";
import TableComponent from "./TableComponent";

const { Column } = Table;
const ButtonGroup = Button.Group;

export class Home extends Component {
  state = {
    posts: [],
    modalVisible: false,
    title: "",
    desc: ""
  };
  UNSAFE_componentWillMount() {
    axios("http://localhost:3004/posts").then(resp => {
      const data = resp.data.map(a => ({
        key: a.id,
        id: a.id,
        title: a.title,
        desc: a.desc
      }));
      this.props.appStart(data);
    });
  }
  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };
  handleCancel = () => {
    this.setState({
      modalVisible: false
    });
  };
  handleOk = () => {
    this.setState({
      modalVisible: false
    });
    const data = {
      title: this.state.title,
      desc: this.state.desc
    };
    this.props.addData(data);
  };

  render() {
    const column = this.state.posts;
    const { title, desc } = this.state;

    return (
      <div>
        <TableComponent />
        <Button type="primary" onClick={this.showModal}>
          Add
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.modalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <label>Title:</label>
          <Input
            placeholder="Title"
            value={title}
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
          />

          <label>Description:</label>
          <Input
            placeholder="Description"
            value={desc}
            onChange={e => {
              this.setState({ desc: e.target.value });
            }}
          />
        </Modal>
      </div>
    );
  }
}

Login.propTypes = {
  appStart: PropTypes.func,
  addData: PropTypes.func
};

function mapStateToProps(state) {
  return {
    app: state.app
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      appStart: data => appStart(data),
      addData: data => addData(data)
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
