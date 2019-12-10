function userReducer(state= {
    comment: {
        comment_text: "",
    },
    errors: [],
    message: ""
}, action) {
    switch(action.type) {
        case "FETCH_COMMENT_FULFILLED":
            return { ...state, }
    
        case "FETCH_COMMENT_REJECTED":
            return { ...state, errors: action.payload.errors }

        case "FETCH_COMMENTS_FULFILLED":
            return { ...state, }
    
        case "FETCH_COMMENTS_REJECTED":
            return { ...state, errors: action.payload.errors }

        case "CREATE_COMMENT_FULFILLED":
            return { ...state, }

        case "CREATE_COMMENT_REJECTED":
            return { ...state, errors: action.payload.errors }

        case "EDIT_COMMENT_FULFILLED":
            return { ...state, }

        case "EDIT_COMMENT_REJECTED":
            return { ...state, errors: action.payload.errors }

        case "DELETE_COMMENT_FULFILLED":
            return { ...state, }

        case "DELETE_COMMENT_REJECTED":
            return { ...state, errors: action.payload.errors }

        default:
            return state;
    }
}

export default userReducer;