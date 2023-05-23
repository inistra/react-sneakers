import styles from "./Card.module.scss";
import React, { useState, useEffect } from "react";

function Card({
  price,
  imageUrl,
  title,
  onFavorite,
  onPlus,
  isItemInCart,
  isItemInFavorite,
  onDelete,
  cartItems,
  favorites,
  onDeleteFavorite,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsAdded(isItemInCart());
    setIsFavorite(isItemInFavorite());
  }, [isItemInCart, isItemInFavorite]);

  const handleClick = () => {
    if (!isItemInCart()) {
      onPlus({ price, imageUrl, title });
    } else {
      const existingItem = cartItems.find((item) => item.title === title);
      onDelete(existingItem); // Предполагается, что у вас есть функция onDelete, которая принимает товар в качестве аргумента и удаляет его из корзины
    }
    setIsAdded(!isAdded);
  };

  const handleFavoriteClick = () => {
    if (!isItemInFavorite()) {
      onFavorite({ price, imageUrl, title });
    } else {
      const existingItem = favorites.find((item) => item.title === title);
      onDeleteFavorite(existingItem);
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={handleFavoriteClick}>
        <img
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt={isFavorite ? "liked" : "unliked"}
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column pb-10">
          <span className="pt-15">Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className="button" onClick={handleClick}>
          <img
            width={32}
            height={32}
            src={isAdded ? "/img/checked.svg" : "/img/plus.svg"}
            alt={isAdded ? "checked" : "plus"}
          />
        </button>
      </div>
    </div>
  );
}
export default Card;
