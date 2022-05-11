import { HeartIcon as FillHeartIcon, StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import "./SearchResult.css";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  const [like, setLike] = useState(false);

  return (
    <div className="searchResult">
      <img src={img} alt={title} />
      <div className="searchResult__info">
        <div className="searchResult__content">
          <h6 className="grey-text lighten-2">{location}</h6>
          <h4>{title}</h4>
          <h6 className="grey-text lighten-2">_____</h6>
          <p className="grey-text lighten-2">{description}</p>
        </div>
        <div className="searchResult__price">
          <div>
            <StarIcon
              className="searchResult__icon"
              style={{ fill: "var(--main-color-red)" }}
            />
            <div>{star}</div>
          </div>
          <div>
            <h5>{price}</h5>
            <h6>{total}</h6>
          </div>
        </div>
      </div>

      <div onClick={() => setLike(!like)} className="searchResult__like">
        {like ? (
          <FillHeartIcon
            className="searchResult__icon"
            style={{ fill: "var(--main-color-red)" }}
          />
        ) : (
          <HeartIcon className="searchResult__icon" />
        )}
      </div>
    </div>
  );
}

export default SearchResult;
