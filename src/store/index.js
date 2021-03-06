import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import recipeReducer from "./reducers/recipes";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(
  combineReducers({
    recipes: recipeReducer
  }),
  bindMiddleware([thunkMiddleware])
);
export default store;
