import {
  GET_COMMENT_ERROR,
  GET_COMMENT_START,
  GET_COMMENT_SUCCESS,
  GET_ALL_COMMENT_SUCCESS,
} from "./types";
export const reducer = (state, action) => {
  switch (action.type) {
    case GET_COMMENT_START:
      return {
        ...state,
        isLoading: true,
        isGetPostSuccess: false,
      };
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isGetCommentSuccess: true,
        comments: state.comments.concat(action.payload),
      };
    case GET_ALL_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isGetCommentSuccess: true,
        allComments: action.payload,
      };
    case GET_COMMENT_ERROR:
      return {
        ...state,
        isLoading: false,
        isGetCommentSuccess: false,
        error: action.payload,
      };
  }
};
