import { useSelector } from "react-redux";
import React from "react";
import Search from "../../components/Search/Search";
import style from "../../sassModules/searchPage.module.scss";
import Bookmark from "../../components/Bookmark/Bookmark";

const SearchPage = () => {
  const isSearching = useSelector(state => state.recipes.gettingRecipes);
  return (
    <div className={style.page}>
      <video autoplay="autoplay" loop="loop" className={style.bkgVideo}>
        <source src="video/video.mp4" type="video/mp4" />
      </video>
      <div>
        <Bookmark />
      </div>
      {isSearching ? <h4>Loading...</h4> : <Search />}
    </div>
  );
};

export default SearchPage;
