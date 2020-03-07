import React from "react";
import style from "../../sassModules/recipe.module.scss";
import { useDispatch } from "react-redux";
import { unbookmark } from "../../store/actions";
import { bookmark } from "../../store/actions";

const Recipe = ({
  title,
  dietLabels,
  image,
  ingredients,
  url,
  isBookmarked
}) => {
  const dispatch = useDispatch();

  const clickHandler = e => {
    isBookmarked
      ? dispatch(unbookmark(url))
      : dispatch(
          bookmark({
            title,
            dietLabels,
            image,
            ingredients,
            url
          })
        );
  };

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

      <button onClick={clickHandler}>
        {isBookmarked ? "Unbookmark" : "Bookmark"}
      </button>
    </div>
  );
};
export default Recipe;
