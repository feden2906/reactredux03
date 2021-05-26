//Зєднуємо редусери
import { combineReducers } from "redux";

import { postsReducer } from "./postsReducer";
import { commentsReducer } from "./commentsReduser";

export default combineReducers({
  posts: postsReducer,
  comments: commentsReducer
});
