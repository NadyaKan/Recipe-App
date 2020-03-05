import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipes: [],
  gettingRecipes: false
};

const searchingRecipes = (state, action) => {
  return { ...state, searching: action.payload };
};

const setRecipes = (state, action) => {
  return { ...state, recipes: action.payload };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RECIPES:
      return setRecipes(state, action);
    case actionTypes.SEARCHING_RECIPES:
      return searchingRecipes(state, action);
    default:
      return state;
  }
};

export default reducer;
export { initialState };
export const getRecipes = state => state.recipes.recipes;
