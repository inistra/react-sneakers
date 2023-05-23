import { Card } from "../components";

function Favorites({
  onAddToCart,

  onAddToFavorite,
  onDeleteChoice,
  onDeleteFavorite,
  isItemInCart,
  isItemInFavorite,
  favorites,
}) {
  return (
    <div className="content p-40">
      {favorites.length > 0 ? (
        <div>
          <div className="d-flex align-center justify-between">
            <h1>Мои закладки</h1>
          </div>
          <div className="grid pt-40">
            {favorites.map((obj) => (
              <Card
                key={obj.title}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onPlus={onAddToCart}
                onFavorite={onAddToFavorite}
                isItemInCart={() => isItemInCart(obj.title)}
                isItemInFavorite={() => isItemInFavorite(obj.title)}
                favorites={favorites}
                onDelete={onDeleteChoice}
                onDeleteFavorite={onDeleteFavorite}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Закладок нет</h2>
          <p>Вы ничего не добавляли в закладки</p>
          <button className="greenBtn">
            <img src="/img/arrow.svg" alt="arrow"></img>
          </button>
        </div>
      )}
    </div>
  );
}

export default Favorites;
