import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form, Button, Input, Card, Timeline, Row, Col } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { loggedIn } from "../actions";

const FormItem = Form.Item;

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loggedIn(data);
    this.setState({
      loading: true
    });
    this.props.history.push("/home");
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="Login">
        <Row gutter={48}>
          <Col xl={8} lg={10} md={24} xs={24}>
            <Card className="login">
              <Form onSubmit={this.handleSubmit}>
                <FormItem>
                  <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                </FormItem>
                <FormItem>
                  <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </FormItem>
                <Button
                  htmlType="submit"
                  type="primary"
                  loading={this.state.loading}
                >
                  LOG IN
                </Button>
                <Link to="/register">
                  <p>Sign up now </p>
                </Link>
              </Form>
            </Card>
          </Col>
          <Col xl={16} lg={14} md={24} xs={24}>
            <Card className="register">
              <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>
                  Solve initial network problems 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>
                  Network problems being solved 2015-09-01
                </Timeline.Item>
              </Timeline>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Login.propTypes = {
  loggedIn: PropTypes.func
};

const mapStateToProps = state => ({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      loggedIn: data => loggedIn(data)
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((Login = Form.create()(Login)));
