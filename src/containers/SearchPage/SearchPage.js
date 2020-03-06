import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";

const SearchPage = () => {
  const isSearching = useSelector(state => state.recipes.gettingRecipes);
  return (
    <div>
      <div>
        <Link to="/bookmarks">My Bookmarks</Link>
      </div>
      {isSearching ? <h4>Loading...</h4> : <Search />}
    </div>
  );
};

export default SearchPage;
