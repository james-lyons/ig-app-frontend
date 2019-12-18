import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";
import FeedComponent from "../../components/FeedComponent/FeedComponent";
import PostContainer from "../PostContainer/PostContainer";

class Home extends React.Component {
  state = {
    edit_review_display: "none"
  }

  componentDidMount = () => {
    this.props.fetchPosts();
  };

  editReviewDisplay = () => {
    this.state.edit_review_display === "none" ?
    this.setState({ edit_review_display: "" }) :
    this.setState({ edit_review_display: "none"});
};

  render() {
    return (
      <>
        <PostContainer />
        <FeedComponent editReviewDisplay={ this.editReviewDisplay } />
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
