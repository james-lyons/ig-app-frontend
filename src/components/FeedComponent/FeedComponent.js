import React from "react";
import { connect } from "react-redux";
import { Button, Col, Form } from 'react-bootstrap';
import { fetchPosts, editPost, deletePost } from "../../actions/postActions";

const FeedComponent = ({ ...props }) => {

  const mapPosts = posts => {
    const currentUser = localStorage.getItem('uid');
    const postArray = posts.map(post => (
      <div key={post._id}>
        <img src={post.image} alt="" />
        <p>{post.post_text}</p>
        { post.user === currentUser && mapButtons(post._id) }
        { post.user === currentUser && editPost(post._id) }
      </div>
    ));
    return postArray;
  };

  const mapButtons = (post_id) => {
    return (
      <>
        <div className="edit-and-delete-buttons">
          <Button className="post-buttons" onClick={() => props.handleEditPostDisplay() }>Edit</Button>
          <Button className="post-buttons" onClick={() => props.deletePost(post_id) }>Delete</Button>
        </div>
      </>
    );
  };

  const editPost = (post_id) => {
    return (
      <Col className="col-12 post-edit-form" style={{ display: props.editPostDisplay }}>
          <Form onSubmit={ () => props.editPost(post_id, props.postText)}>
              <Form.Row>
                  <Form.Group className="col-8" controlId="edit-post">
                      <Form.Control
                          required
                          name="postText"
                          type="text"
                          as="textarea"
                          rows="4"
                          onChange={ props.handlePostEdit }
                          placeholder="Edit post"
                      />
                  </Form.Group>
              </Form.Row>
              <Button className="btn btn-danger" type="submit">Submit Edit</Button>
          </Form>
      </Col>
    );
};

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {props.posts && mapPosts(props.posts)}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts
  };
};

export default connect(mapStateToProps, { fetchPosts, editPost, deletePost })(FeedComponent);
