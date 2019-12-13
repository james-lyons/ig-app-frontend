import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/postActions";

class PostInputContainer extends React.Component {
  state = {
    post_text: "",
    image: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createPost(this.state.post_text, this.state.image);
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row text-left">
            <div className="col-md-12">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Post Image</label>
                  <input
                    type="text"
                    name="image"
                    onChange={this.handleChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Image URL"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Paste your image URL here.
                  </small>
                </div>
                <div className="form-group">
                  <label>Post Text</label>
                  <input
                    type="text"
                    as="textarea"
                    rows="4"
                    name="post_text"
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Post Description"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { createPost })(PostInputContainer);
