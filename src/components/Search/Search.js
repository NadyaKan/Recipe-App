import React from "react";
import { fetchRecipes } from "../../store/actions/recipes";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "../../sassModules/search.module.scss";

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
    <form onSubmit={submitHandler} className={style.search_form}>
      <svg className={style.iconSearch}>
        <use xlinkHref="SVG/sprite.svg#search" />
      </svg>
      <input
        className={style.search_bar}
        type="text"
        placeholder="Search for recipe..."
      />
      <button className={style.search_button} type="submit">
        Search
      </button>
    </form>
  );
};
export default Search;
