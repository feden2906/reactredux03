//Імпортуємо actions константи з папки action-type
import {
  START_COMMENTS_LOADING,
  STOP_COMMENTS_LOADING,
  SET_COMMENTS,
  SET_COMMENTS_ERROR
} from "../action-type";
//спочатку initialState має статус undefined
const initialState = {
  //в posts буде зберігатися пости, на початку порожній масив
  commentss: [],
  isCommentsLoading: false,
  error: ""
};

//експортуємо postsReducer
//в state присвоюємо initialState
export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_COMMENTS_LOADING: {
      return {
        ...state, // клонуємо все, що є в state
        isCommentsLoading: true
      };
    }
    case STOP_COMMENTS_LOADING: {
      return {
        ...state, // клонуємо все, що є в state
        isCommentsLoading: false
      };
    }
    case SET_COMMENTS: {
      return {
        ...state, // клонуємо все, що є в state
        comments: action.payload
      };
    }
    case SET_COMMENTS_ERROR: {
      return {
        ...state, // клонуємо все, що є в state
        error: action.payload
      };
    }
    default:
      return state; // після повернення в initialState зберігається те, що потрапило в state
  }
};
