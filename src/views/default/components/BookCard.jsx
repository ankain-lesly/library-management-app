import React from "react";
import { Link } from "react-router-dom";
import { RiCheckDoubleLine, RiHeartFill } from "react-icons/ri";

const BookCard = ({ data, actions }) => {
  function slog(string) {
    // .toLowerCase()
    return string.replace(/ /g, "_").replace(/[^\w-]+/g, "");
  }
  const { title, id } = data;
  const isReact = actions.reacts.includes(id);
  const isFavorite = actions.favorites.includes(id);

  return (
    <div className='main_book_item'>
      <div
        className={`container ${isReact && "react"} ${
          isFavorite && "favorite"
        }`}
      >
        <Link to={`/${slog(title)}`}>
          <h4 className='book-title'>{title}</h4>
        </Link>
        <div className='footer-btns flex between'>
          <button
            className='book-btn add-favorite'
            title='Add to favorite list'
          >
            <RiCheckDoubleLine fontSize={23} />
          </button>
          <button className='book-btn padd react-to' title='React to this book'>
            <RiHeartFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
