import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';

class PostInputContainer extends React.Component {
    state = {
        post_text: "",
        image: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createPost(this.state.post_text, this.state.image);
    };

    render() {
        return (
            <>
                <form>

                </form>
            </>
        );
    };
};

export default connect(null, { createPost })(PostInputContainer);