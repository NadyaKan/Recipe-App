import { useSelector } from "react-redux";
import React from "react";
import Search from "../../components/Search/Search";

const SearchPage = () => {
  const isSearching = useSelector(state => state.recipes.gettingRecipes);
  return isSearching ? <h4>Loading...</h4> : <Search />;
};

export default SearchPage;
