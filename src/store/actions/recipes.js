import * as actionTypes from "./actionTypes";

const appId = process.env.REACT_APP_APP_ID;
const appKey = process.env.REACT_APP_APP_KEY;

export const searchingRecipes = payload => {
  return {
    type: actionTypes.SEARCHING_RECIPES,
    payload: payload
  };
};

export const setRecipes = foundRecipes => {
  return {
    type: actionTypes.SET_RECIPES,
    payload: foundRecipes
  };
};

export const fetchRecipes = query => {
  return dispatch => {
    dispatch(searchingRecipes(true));
    console.log(query);

    return fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
    )
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          throw json.error;
        }
        console.log(json);

        const foundRecipes = json.hits;
        dispatch(setRecipes(foundRecipes));
        dispatch(searchingRecipes(false));
        return foundRecipes;
      });
  };
};
