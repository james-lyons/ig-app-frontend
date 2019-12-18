import React from "react";
import { connect } from "react-redux";
import { Modal, Button, Form, Col, Image } from "react-bootstrap";
// import "./RegisterComponent.css";

const RegisterComponent = props => {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Register for a free account today!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="register-modal">
          <div className="row">
            {props.errors &&
              props.errors.map((err, i) => (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  style={{ width: "100%" }}
                  role="alert"
                  key={i}
                >
                  {err.message}
                  <button className="close" data-dismiss="alert">
                    <spam aria-hidden="true">&times;</spam>
                  </button>
                </div>
              ))}
            {props.message && (
              <div
                className="alert alert-danger alert-dismissible fade show"
                style={{ width: "100% " }}
                role="alert"
              >
                {props.message}
                <button className="close" data-dismiss="alert">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}
            <Form onSubmit={props.handleSubmit}>
              <Form.Row>
                <Form.Group className="col-6" controlId="name">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    required
                    name="username"
                    type="text"
                    onChange={props.handleChange}
                    placeholder="Username"
                  />
                </Form.Group>
                <Form.Group className="col-6" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    name="email"
                    type="email"
                    onChange={props.handleChange}
                    placeholder="email@email.com"
                  />
                </Form.Group>
                <Form.Group className="col-6" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    name="password"
                    type="password"
                    onChange={props.handleChange}
                    placeholder="password"
                  />
                </Form.Group>
                <Form.Group className="col-6" controlId="password2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    name="password2"
                    type="password"
                    onChange={props.handleChange}
                    placeholder="password"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group className="col-12" controlId="profile_picture">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control
                    required
                    name="profile_picture"
                    type="text"
                    onChange={props.handleChange}
                  />
                </Form.Group>
                <Col id="profile_picture" as={Col} md="3" xs={6}>
                  <Image src={props.profile_picture} thumbnail />
                </Col>
              </Form.Row>
              <Button className="btn btn-danger" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = state => {
  return {
    errors: state.userReducer.errors,
    message: state.userReducer.message
  };
};

export default connect(mapStateToProps, null)(RegisterComponent);
