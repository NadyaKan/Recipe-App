import React from "react";
import { useSelector } from "react-redux";

import Recipe from "../../components/Recipe/Recipe";
import Search from "../../components/Search/Search";

const RecipesPage = () => {
  const recipes = useSelector(state => state.recipes.recipes);

  return (
    <div>
      <Search />
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            dietLabels={recipe.recipe.dietLabels}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
