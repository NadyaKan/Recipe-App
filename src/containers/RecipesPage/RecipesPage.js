import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Recipe from "../../components/Recipe/Recipe";
import Search from "../../components/Search/Search";

const RecipesPage = () => {
  const recipes = useSelector(state => state.recipes.recipes);

  return (
    <div>
      <Link to="/bookmarks">My Bookmarks</Link>
      <Search />
      <div className="recipes">
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
