import { Route, Routes } from "react-router-dom";
import { Card, Header, Drawer } from "./components/index";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://6468cd64e99f0ba0a82d4166.mockapi.io/items")
      .then((res) => setItems(res.data))
      .catch((error) => console.error("Ошибка при получении товаров:", error));

    axios
      .get("https://6468cd64e99f0ba0a82d4166.mockapi.io/cart")
      .then((res) => setCartItems(res.data))
      .catch((error) =>
        console.error("Ошибка при получении товаров в корзине:", error)
      );
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const getTotalPriceInCart = () =>
    cartItems.reduce((total, item) => total + item.price, 0);

  const onAddToCart = (obj) => {
    axios
      .post("https://6468cd64e99f0ba0a82d4166.mockapi.io/cart", obj)
      .then((res) => setCartItems((prev) => [...prev, obj]))
      .catch((error) =>
        console.error("Ошибка при добавлении товара в корзину:", error)
      );
  };

  const onRemoveCart = (id) => {
    axios
      .delete(`https://6468cd64e99f0ba0a82d4166.mockapi.io/cart/${id}`)
      .then(() => setCartItems((prev) => prev.filter((item) => item.id !== id)))
      .catch((error) =>
        console.error("Ошибка при удалении товара из корзины:", error)
      );
  };

  const onAddFavorite = (obj) => {
    const isFavoriteExist = favorites.some(
      (favorite) => favorite.title === obj.title
    );
    if (!isFavoriteExist) {
      const updatedFavorites = [...favorites, obj];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
    console.log(favorites);
  };

  const handleDeleteFavorite = (favoriteToDelete) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.title !== favoriteToDelete.title
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const onDeleteChoice = (itemToDelete) => {
    const updatedItems = cartItems.filter(
      (item) => item.title !== itemToDelete.title
    );
    setCartItems(updatedItems);
    axios
      .delete(
        `https://6468cd64e99f0ba0a82d4166.mockapi.io/cart/${itemToDelete.id}`
      )
      .catch((error) => {
        console.error(
          `Error deleting item with ID ${itemToDelete.id} from server:`,
          error
        );
        setCartItems((prevItems) => [...prevItems, itemToDelete]);
      });
  };

  const isItemInCart = (itemTitle) =>
    cartItems.some((obj) => obj.title === itemTitle);

  const isItemInFavorite = (favoriteTitle) =>
    favorites.some((obj) => obj.title === favoriteTitle);

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onRemove={onRemoveCart}
          items={cartItems}
          onClose={() => setCartOpened(false)}
          totalPrice={getTotalPriceInCart()}
        />
      )}
      <Header
        onClickCart={() => setCartOpened(true)}
        totalPrice={getTotalPriceInCart()}
      />

      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input
              onChange={(event) => setSearchValue(event.target.value)}
              value={searchValue}
              placeholder="Поиск..."
              type="text"
              name=""
              id=""
            />
            {searchValue && (
              <button onClick={() => setSearchValue("")} className="clear">
                <img width={22} height={22} src="/img/exit.svg" alt="clear" />
              </button>
            )}
          </div>
        </div>
        <div className="grid pt-40">
          {items
            .filter((obj) =>
              searchValue
                .toLowerCase()
                .split(" ")
                .every((word) => obj.title.toLowerCase().includes(word))
            )
            .map((obj) => (
              <Card
                key={obj.title}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onPlus={onAddToCart}
                onFavorite={() => onAddFavorite(obj)}
                isItemInCart={() => isItemInCart(obj.title)}
                cartItems={cartItems}
                isItemInFavorite={isItemInFavorite}
                favorite={favorites}
                onDelete={onDeleteChoice}
                onDeleteFavorite={handleDeleteFavorite}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
