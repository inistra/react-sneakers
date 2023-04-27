function Card() {
  return (
    <div className="card p-30 pt-20">
      <div className="favorite">
        <img src="/img/heart-disabled.svg" alt="heart-disabled" />
      </div>
      <img
        width={133}
        height={112}
        src="/img/sneakers/sneakers-1.jpg"
        alt="Sneakers"
      />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column pb-10">
          <span className="pt-15 ">Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button ">
          <img width={32} height={32} src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
