import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
//import Search from "./Search";

const App = () => {
  return (
    <div className="App">
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

export default App;
