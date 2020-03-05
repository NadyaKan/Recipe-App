import React from "react";
import style from "../../recipe.module.css";

const Recipe = ({ title, dietLabels, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img src={image} alt="" />
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>

      {dietLabels.map((dietLabel, index) => (
        <p key={index}>*{dietLabel}</p>
      ))}
    </div>
  );
};
export default Recipe;
