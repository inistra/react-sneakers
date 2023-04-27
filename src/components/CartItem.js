function CartItem() {
  return (
    <div className="cartItem d-flex p-20 align-center mb-20">
      <img
        className=" mr-20"
        width={70}
        height={70}
        src="/img/sneakers/sneakers-1.jpg"
        alt="sneakers"
      />
      <div className="d-flex flex-column  pr-10">
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <b>12 999 руб.</b>
      </div>
      <button>
        <img src="/img/exit.svg" alt="delete" />
      </button>
    </div>
  );
}

export default CartItem;
