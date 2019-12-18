import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";
import FeedComponent from "../../components/FeedComponent/FeedComponent";
import PostContainer from "../PostContainer/PostContainer";

class Home extends React.Component {
  componentDidMount = () => {
    this.props.fetchPosts();
  };

  render() {
    return (
      <>
        <PostContainer />
        <FeedComponent />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts
  };
};

export default connect(mapStateToProps, { fetchPosts })(Home);
