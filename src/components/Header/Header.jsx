import { Search } from "../Search";
import style from "./Header.module.css";

export function Header() {
  return (
    <header>
      <div className={style.header}>
        <a href="/">
          <img src="icons/SHOP.CO.svg" />
        </a>
        <ul>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">On Sale</a>
          </li>
          <li>
            <a href="/">New Arrivals</a>
          </li>
          <li>
            <a href="/">Brands</a>
          </li>
        </ul>
        <Search />
        <div className={style.icons}>
          <a href="/cart">
            <img src="icons/cart-icon.svg" />
          </a>
          <a href="/">
            <img src="icons/avatar-icon.svg" />
          </a>
        </div>
      </div>
      <hr />
    </header>
  );
}
