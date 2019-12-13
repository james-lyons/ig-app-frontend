import axios from 'axios';
import API_URL from '../constants';

const fetchPost = (id) => {
    return dispatch => {
        return axios.get(`${ API_URL }/post/${ id }`, { withCredentials: true })
            .then(res => {
                dispatch({ type: "FETCH_POST_FULFILLED", payload: res.data.data })
            })
            .catch(err => {
                dispatch({ type: "FETCH_POST_REJECTED", payload: err.response })
            });
    };
};

const fetchPosts = () => {
    return dispatch => {
        return axios.get(`${ API_URL }/post`, { withCredentials: true })
            .then(res => {
                dispatch({ type: "FETCH_POSTS_FULFILLED", payload: res.data.data })
                console.log('this is the res', res)
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: "FETCH_POSTS_REJECTED", payload: err.response.data })
            });
    };
};

const createPost = (post_text, image) => {
    return dispatch => {
        return axios.post(`${ API_URL }/post`,
        { post_text, image }, { withCredentials: true })
            .then(res => {
                dispatch({ type: 'CREATE_POST_FULFILLED' })
            })
            .catch(err => {
                dispatch({ type: 'CREATE_POST_REJECTED', payload: err.response.data })
            });
    };
};

const editPost = (post_text, image, post_id) => {
    return dispatch => {
        return axios.put(`${ API_URL }/post/${ post_id }`,
        { post_text, image }, { withCredentials: true })
            .then(res => {
                dispatch({ type: 'EDIT_POST_FULFILLED' })
            })
            .catch(err => {
                dispatch({ type: 'EDIT_POST_REJECTED', payload: err.response.data })
            });
    };
};

const deletePost = (post_id) => {
    return dispatch => {
        return axios.delete(`${ API_URL }/post/${ post_id }`,
        { withCredentials: true })
            .then(res => {
                dispatch({ type: 'DELETE_POST_FULFILLED' })
            })
            .catch(err => {
                dispatch({ type: 'DELETE_POST_REJECTED', payload: err.response.data })
            });
    };
};

export {
    fetchPost,
    fetchPosts,
    createPost,
    editPost,
    deletePost
}