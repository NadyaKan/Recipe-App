import { useSelector } from "react-redux";
import React from "react";
import Recipe from "../../components/Recipe/Recipe";
import { getBookmarks } from "../../store/reducers/recipes";
import Search from "../../components/Search/Search";
import style from "../../sassModules/bookmarksPage.module.scss";

const BookmarksPage = () => {
  const bookmarks = useSelector(state => getBookmarks(state));

  return (
    <div>
      <Search />
      <div className={style.recipes}>
        {bookmarks.map((bookmark, index) => (
          <Recipe
            key={index}
            title={bookmark.recipe.label}
            dietLabels={bookmark.recipe.dietLabels}
            image={bookmark.recipe.image}
            ingredients={bookmark.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default BookmarksPage;
