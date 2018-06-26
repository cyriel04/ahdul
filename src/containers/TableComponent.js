import React, { Component } from "react";
import { Table, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as Icons from "@fortawesome/fontawesome-free-solid";
import PropTypes from "prop-types";
import { deleteData } from "../actions";
const { Column } = Table;
const ButtonGroup = Button.Group;

class TableComponent extends Component {
  render() {
    return (
      <div>
        <Table dataSource={this.props.app}>
          <Column title="NAME" dataIndex="title" key="title" />
          <Column title="DESCRIPTION" dataIndex="desc" key="desc" />
          <Column
            title="ACTION"
            key="action"
            width={120}
            render={data => (
              <span>
                <ButtonGroup>
                  <Button size="small" className="view">
                    <FontAwesomeIcon icon={Icons.faEye} />
                  </Button>
                  <Button size="small" className="upd">
                    <FontAwesomeIcon icon={Icons.faPencilAlt} />
                  </Button>
                  <Button
                    size="small"
                    className="del"
                    onClick={() => {
                      this.props.deleteData(data.id);
                    }}
                  >
                    <FontAwesomeIcon icon={Icons.faTrashAlt} />
                  </Button>
                </ButtonGroup>
              </span>
            )}
          />
        </Table>
      </div>
    );
  }
}

TableComponent.propTypes = {
  deleteData: PropTypes.func
};
function mapStateToProps(state) {
  return {
    app: state.app
  };
}
export default connect(
  mapStateToProps,
  { deleteData }
)(TableComponent);
