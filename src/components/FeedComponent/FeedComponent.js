import React from "react";
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
import { fetchPosts } from "../../actions/postActions";

const FeedComponent = ({ ...props }) => {

  const mapPosts = posts => {
    const currentUser = localStorage.getItem('uid');
    const postArray = posts.map(post => (
      <div key={post._id}>
        <img src={post.image} alt="" />
        <p>{post.post_text}</p>
        {console.log(post)}
        { post.user === currentUser && mapButtons(post._id)}
      </div>
    ));
    return postArray;
  };

  const mapButtons = (post_id) => {
    return (
      <>
        <div className="edit-and-delete-buttons">
          <Button className="post-buttons" onClick={() => props.editPostReviewDisplay() }>Edit</Button>
          <Button className="post-buttons" onClick={() => props.deletePost(post_id) }>Delete</Button>
        </div>
      </>
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

export default connect(mapStateToProps, { fetchPosts })(FeedComponent);
