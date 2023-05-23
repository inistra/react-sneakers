import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40 ">
      <div className="d-flex align-center  ">
        <Link to="/">
          <img width={40} height={40} src="/img/logo.png" alt="" />
        </Link>

        <div className="ml-15">
          <h3 className="text-uppercase">REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="d-flex cu-p">
        <li onClick={props.onClickCart}>
          <img
            className="mr-10 "
            height={20}
            width={20}
            src="/img/cor.svg"
            alt=""
          />
          <span>{props.totalPrice} руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img height={20} width={20} src="/img/heart.svg" alt="Heart" />
          </Link>
        </li>
        <li>
          <img height={20} width={20} src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
