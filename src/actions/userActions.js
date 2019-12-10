import axios from 'axios';
import API_URL from '../constants';

const userRegister = (data) => {
    return dispatch => {
        return axios.post(`${ API_URL }/auth/register`, data, { withCredentials: true })
            .then(res => {
                dispatch({ type: "USER_REGISTER_FULFILLED", payload: res.data });
            })
            .catch(err => {
                dispatch({ type: "USER_REGISTER_REJECTED", payload: err.response.data })
            });
    };
};

const userLogin = (data) => {

};

const userLogout = (data) => {

}

export {
    userRegister,
    userLogin,
    userLogout
}