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

const bookmark = (state, action) => {
  const recipes = state.recipes.map(recipe => {
    if (recipe.recipe.url === action.payload.url) {
      return { ...recipe, isBookmarked: true };
    }
    return recipe;
  });
  return { ...state, recipes: recipes };
};

const unbookmark = (state, action) => {
  const recipes = state.recipes.map(recipe => {
    if (recipe.recipe.url === action.payload) {
      return { ...recipe, isBookmarked: false };
    }
    return recipe;
  });
  return { ...state, recipes: recipes };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RECIPES:
      return setRecipes(state, action);
    case actionTypes.SEARCHING_RECIPES:
      return searchingRecipes(state, action);
    case actionTypes.BOOKMARK:
      return bookmark(state, action);
    case actionTypes.UNBOOKMARK:
      return unbookmark(state, action);

    default:
      return state;
  }
};

export default reducer;
export { initialState };
export const getRecipes = state => state.recipes.recipes;

export const getBookmarks = state => {
  return state.recipes.recipes.filter(recipe => {
    return recipe.isBookmarked;
  });
};
