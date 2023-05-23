function Drawer({ onClose, items = [], totalPrice, onRemove }) {
  const getTax = () => {
    const tax = totalPrice * 0.05;
    const roundedTax = tax.toFixed(2);
    return parseInt(roundedTax, 10);
  };
  return (
    <div className="drawer-overlay">
      <div className="drawer">
        <div className="pl-30 pr-30"></div>
        <div className="d-flex justify-between mr-30">
          <h2 className="p-30">Корзина</h2>
          <button onClick={onClose} className="exitbtn">
            <img src="/img/exit.svg" alt="exit" />
          </button>
        </div>

        {items.length > 0 ? (
          <div className="items">
            {items.map((obj) => (
              <div
                className="cartItem d-flex p-20 align-center mb-20 "
                key={obj.title}
              >
                <img
                  className=" mr-20"
                  width={70}
                  height={70}
                  src={obj.imageUrl}
                  alt="sneakers"
                />
                <div className="d-flex flex-column  pr-10">
                  <h5>{obj.title}</h5>
                  <b> {obj.price} руб.</b>
                </div>
                <button onClick={() => onRemove(obj.id)}>
                  <img src="/img/exit.svg" alt="delete" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="d-flex align-center flex-column">
            <center className="mt-50 ">Корзина пуста</center>
            <img
              width={140}
              height={140}
              className="mt-50 mb-50 "
              src="/img/cart.png"
              alt="cart"
            />
          </div>
        )}
        <div className="cart-total">
          <ul className="total ">
            <li>
              <span>Итого:</span>
              <div> </div>
              <b>{totalPrice}руб.</b>
            </li>
            <li>
              <span>Скидка 5%: </span>
              <div> </div>
              <b> {getTax()} руб.</b>
            </li>
          </ul>
          <button className="greenBtn">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
