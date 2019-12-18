import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";
import FeedComponent from "../../components/FeedComponent/FeedComponent";
import PostContainer from "../PostContainer/PostContainer";

class Home extends React.Component {
  state = {
    editPostDisplay: "none",
    postText: "",
  }

  componentDidMount = () => {
    this.props.fetchPosts();
  };

  handlePostEdit = (event) => {
    this.setState({
        reviewText: event.target.value
    });
  };

  handleEditPostDisplay = () => {
    this.state.editPostDisplay === "none" ?
    this.setState({ editPostDisplay: "" }) :
    this.setState({ editPostDisplay: "none"});
  };

  render() {
    return (
      <>
        <PostContainer />
        <FeedComponent
          editPostDisplay= { this.state.editPostDisplay }
          postText={ this.state.postText }
          handleEditPostDisplay={ this.handleEditPostDisplay }
          handlePostEdit={ this.handlePostEdit }
        />
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
