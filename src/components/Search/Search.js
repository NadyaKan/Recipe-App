import React from "react";
import { fetchRecipes } from "../../store/actions/recipes";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Search = props => {
  let history = useHistory();
  const dispatch = useDispatch();
  const boundFetchRecipes = bindActionCreators(fetchRecipes, dispatch);

  const submitHandler = e => {
    e.preventDefault();
    const query = e.target.elements[0].value;

    boundFetchRecipes(query);
    history.push("/recipes");
  };

  return (
    <form onSubmit={submitHandler} className="search-form">
      <input className="search-bar" type="text" />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};
export default Search;
