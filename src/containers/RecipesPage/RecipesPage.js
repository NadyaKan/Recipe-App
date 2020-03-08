import React from "react";
import { useSelector } from "react-redux";
import style from "../../sassModules/recipePage.module.scss";
import Recipe from "../../components/Recipe/Recipe";
import Search from "../../components/Search/Search";
import Bookmark from "../../components/Bookmark/Bookmark";

const RecipesPage = () => {
  const recipes = useSelector(state => state.recipes.recipes);

  return (
    <div className={style.page}>
      <Bookmark />
      <Search />
      <div className={style.recipes}>
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            dietLabels={recipe.recipe.dietLabels}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
            isBookmarked={recipe.isBookmarked}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
