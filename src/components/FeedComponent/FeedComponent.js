import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";

const mapPosts = posts => {
  const postArray = posts.map(post => (
    <div key={post._id}>
      <img src={post.image} alt="" />
      <p>{post.post_text}</p>
    </div>
  ));
  return postArray;
};

const FeedComponent = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div>This is the home component</div>

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
