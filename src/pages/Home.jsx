import { Card } from "../components";

function Home({
  items,
  onAddToCart,
  setSearchValue,
  searchValue,
  onAddToFavorite,
  onDeleteChoice,
  onDeleteFavorite,
  isItemInCart,
  isItemInFavorite,
  favorites,
  cartItems,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
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
              onFavorite={onAddToFavorite}
              isItemInCart={() => isItemInCart(obj.title)}
              cartItems={cartItems}
              isItemInFavorite={() => isItemInFavorite(obj.title)}
              favorites={favorites}
              onDelete={onDeleteChoice}
              onDeleteFavorite={onDeleteFavorite}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
