import React from "react";
import style from "../../sassModules/bookmark.module.scss";
import { Link } from "react-router-dom";

const Bookmark = props => {
  return (
    <Link to="/bookmarks" className={style.lnk}>
      Favorites
      <svg className={style.iconBookmark}>
        <use xlinkHref="SVG/sprite.svg#bookmark" />
      </svg>
    </Link>
  );
};

export default Bookmark;
