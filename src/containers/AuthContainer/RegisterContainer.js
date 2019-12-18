import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { userRegister } from "../../actions/userActions";
import RegisterComponent from "../../components/Auth/Register";
// import "./AuthContainer.css";

class RegisterContainer extends Component {
  state = {
    username: null,
    email: null,
    profile_picture: null,
    password: null,
    password2: null,
    modalShow: false,
    errors: null
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      profile_picture: this.state.profile_picture,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.userRegister(user);
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
          Register
        </Button>
        <RegisterComponent
          profile_picture={this.state.profile_picture}
          show={this.state.modalShow}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          onHide={this.handleModalShow}
        />
      </>
    );
  }
}

export default connect(null, { userRegister })(RegisterContainer);
