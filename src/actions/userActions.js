import axios from "axios";
import API_URL from "../constants";

const userRegister = data => {
  return dispatch => {
    return axios
      .post(`${API_URL}/auth/register`, data, { withCredentials: true })
      .then(res => {
        dispatch({ type: "USER_REGISTER_FULFILLED", payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: "USER_REGISTER_REJECTED",
          payload: err.response.data
        });
      });
  };
};

const userLogin = data => {
  return dispatch => {
    return axios
      .post(`${API_URL}/auth/login`, data, { withCredentials: true })
      .then(res => {
        window.location.reload();
        localStorage.setItem("uid", res.data.data._id);
        dispatch({ type: "USER_LOGIN_FULFILLED", payload: res.data.data });
      })
      .catch(err => {
        console.log("this is the err", err);
        dispatch({ type: "USER_LOGIN_REJECTED", payload: err.response.data });
      });
  };
};

const userLogout = () => {
  axios
    .post(`${API_URL}/auth/logout`, { withCredentials: true })
    .then(res => {
      localStorage.removeItem("uid");
      localStorage.removeItem("user_role");
      window.location.reload();
      return { type: "USER_LOGOUT_FULFILLED", payload: res.data };
    })
    .catch(err => {
      return { type: "USER_LOGOUT_REJECTED", payload: err.response.data };
    });
};

const fetchUser = currentUser => {
  return dispatch => {
    return axios
      .get(`${API_URL}/accounts/${currentUser}`, { withCredentials: true })
      .then(res => {
        dispatch({ type: "FETCH_USER_FULFILLED", payload: res.data.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_USER_REJECTED", payload: err.response.data });
      });
  };
};

export { userRegister, userLogin, userLogout, fetchUser };
