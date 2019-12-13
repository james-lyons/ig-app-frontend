import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";
import FeedComponent from "../../components/FeedComponent/FeedComponent";
import PostInputContainer from "../PostInputContainer/PostInputContainer";

class Home extends React.Component {
  componentDidMount = () => {
    this.props.fetchPosts();
  };

  render() {
    return (
      <>
        <PostInputContainer />
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
