import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/fontawesome-free-solid";
import { Button, Modal, Input } from "antd";
import { connect } from "react-redux";
import { updateData } from "../actions";
import PropTypes from "prop-types";

class UpdateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      title: this.props.dataProps.title,
      desc: this.props.dataProps.desc
    };
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
      id: this.props.dataProps.id,
      title: this.state.title,
      desc: this.state.desc
    };
    this.props.updateData(data);
  };

  render() {
    const { title, desc } = this.state;
    return (
      <div>
        <Button size="small" className="upd" onClick={this.showModal}>
          <FontAwesomeIcon icon={Icons.faPencilAlt} />
        </Button>

        <Modal
          title="Update Data"
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

UpdateModal.propTypes = {
  updateData: PropTypes.func
};

export default connect(
  null,
  { updateData }
)(UpdateModal);
