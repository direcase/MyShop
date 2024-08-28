import style from "./ProductCard.module.css";
export function ProductCard() {
  return (
    <a href="/product-view">
      <div className={style.product_card}>
        <img src="img/product-t-shirt.png" />
        <p className={style.product_name}>T-shirt with Tape Details</p>
        <div className={style.product_raiting}>
          <div className={style.stars}>
            <img src="icons/star-full.svg" />
            <img src="icons/star-full.svg" />
            <img src="icons/star-full.svg" />
            <img src="icons/star-full.svg" />
            <img src="icons/star-half.svg" />
          </div>
          <p>4.5/5</p>
        </div>
        <div className={style.product_prise}>
          <p>$120</p>
          <p className={style.old_prise}>$240</p>
          <div className={style.discount}>-20%</div>
        </div>
      </div>
    </a>
  );
}
