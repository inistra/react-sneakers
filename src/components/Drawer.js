import CartItem from "./CartItem";
function Drawer() {
  return (
    <div style={{ display: "none" }} className="drawer-overlay">
      <div className="drawer">
        <div className="pl-30 pr-30"></div>
        <div className="d-flex justify-between mr-30">
          <h2 className="p-30">Корзина</h2>
          <button className="exitbtn">
            <img src="/img/exit.svg" alt="exit" />
          </button>
        </div>

        <div className="items">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cart-total">
          <ul className="total ">
            <li>
              <span>Итого:</span>
              <div> </div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div> </div>
              <b>1074 руб.</b>
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
