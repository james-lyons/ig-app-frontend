import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';

const mapPosts = (posts) => {
    const postArray = posts.map(post => 
        <div>
            <img src={ post.image }/>
            <p1>{ post.post_text }</p1>
        </div>
    );
    return postArray;
};

const HomeComponent = (props) => {
    return (
        <>
            <div>This is the home component</div>
            { props.posts && mapPosts(props.posts) }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.postReducer.posts
    };
};

export default connect(mapStateToProps, { fetchPosts })(HomeComponent);