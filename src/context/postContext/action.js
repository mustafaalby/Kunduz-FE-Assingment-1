import React, { createContext, useReducer } from "react";
import {
  GET_COMMENT_ERROR,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_START,
  GET_ALL_COMMENT_SUCCESS,
} from "./types";
import { reducer } from "./reducer";
import { urls } from "context/urls";

const initState = {
  isLoading: false,
  error: "",
  isGetCommentSuccess: false,
  comments: [],
  allComments: [],
};
const Context = createContext();

const State = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const getComments = async (kids) => {
    let status = false;
    dispatch({ type: GET_COMMENT_START });

    try {
      for (let index = 0; index < kids.length; index++) {
        const element = kids[index];

        if (!state.comments.some((c) => c.id == element)) {
          await fetch(`${urls.getById.replace(":id", element)}`, {
            method: "GET",
          })
            .then((response) => {
              status = response.ok;
              return response.json();
            })
            .then((res) => {
              if (status) {
                dispatch({ type: GET_COMMENT_SUCCESS, payload: res });
              } else {
                dispatch({ type: GET_COMMENT_ERROR, payload: res });
              }
            });
        }
      }
      dispatch({ type: GET_ALL_COMMENT_SUCCESS, payload: state.comments });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Context.Provider
      value={{
        state: {
          isLoading: state.isLoading,
          error: state.error,
          isGetCommentSuccess: state.isGetCommentSuccess,
          comments: state.comments,
          allComments: state.allComments,
        },
        functions: { getComments },
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { State, Context };
