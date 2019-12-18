import React from "react";
import { withRouter } from 'react-router'
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import LoginComponent from "../../components/Auth/Login";
import { userLogin } from "../../actions/userActions";
// import "./AuthContainer.css";

class Login extends React.Component {
  state = {
    email: null,
    password: null,
    modalShow: false,
    errors: null
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.userLogin(user);
    this.props.history.push('/feed');
  };

  handleModalShow = () => {
    this.setState({
      modalShow: !this.state.modalShow
    });
  };

  render() {
    return (
      <>
        <Button
          className="btn btn-light auth-button"
          onClick={() => this.handleModalShow()}
        >
          Login
        </Button>
        <LoginComponent
          show={this.state.modalShow}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          onHide={this.handleModalShow}
        />
      </>
    );
  }
}

export default withRouter(connect(null, { userLogin })(Login));
