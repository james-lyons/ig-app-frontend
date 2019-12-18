function postReducer(
  state = {
    post: {
      post_text: "",
      image: ""
    },
    posts: [
      {
        _id: "",
        post_text: "",
        image: ""
      }
    ],
    errors: [],
    message: ""
  },
  action
) {
  switch (action.type) {
    case "FETCH_POST_FULFILLED":
      return { ...state, post: action.payload.data };

    case "FETCH_POST_REJECTED":
      return { ...state, errors: action.payload.errors };

    case "FETCH_POSTS_FULFILLED":
      return { ...state, posts: action.payload };

    case "FETCH_POSTS_REJECTED":
      return { ...state, errors: action.payload.errors };

    case "CREATE_POST_FULFILLED":
      return state;

    case "CREATE_POST_REJECTED":
      return { ...state, errors: action.payload.errors };

    case "EDIT_POST_FULFILLED":
      return state;

    case "EDIT_POST_REJECTED":
      return { ...state, errors: action.payload.errors };

    case "DELETE_POST_FULFILLED":
      return state;

    case "DELETE_POST_REJECTED":
      return { ...state, errors: action.payload.errors };

    default:
      return state;
  }
}

export default postReducer;
