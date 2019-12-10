function userReducer(state= {
    user: {
        username: "",
        email: "",
        profile_image: ""
    },
    errors: [],
    message: ""
}, action) {
    switch(action.type) {
        case "USER_REGISTER_FULFILLED":
            return { ...state, }

        case "USER_REGISTER_REJECTED":
            return { ...state, errors: action.payload.errors }

        case "USER_LOGIN_FULFILLED":
            return { ...state, }

        case "USER_LOGIN_REJECTED":
            return { ...state, errors: action.payload.errors }

        case "USER_LOGOUT_FULFILLED":
            return { ...state, }

        case "USER_LOGOUT_REJECTED":
            return { ...state, errors: action.payload.errors }

        default:
            return state;
    }
}

export default userReducer;