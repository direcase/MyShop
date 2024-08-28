import s from "../ProductCard/ProductCard.module.css";
import style from "./ReviewItem.module.css";

export function ReviewItem() {
  return (
    <div className={style.review}>
      <div className={s.stars}>
        <img src="icons/star-full.svg" />
        <img src="icons/star-full.svg" />
        <img src="icons/star-full.svg" />
        <img src="icons/star-full.svg" />
        <img src="icons/star-half.svg" />
      </div>
      <div className={style.review_text}>
        <div className={style.reviewer_name}>
          Sarah M. <img src="icons/verified-icon.svg" />{" "}
        </div>
        <p>
          "I'm blown away by the quality and style of the clothes I received
          from Shop.co. From casual wear to elegant dresses, every piece I've
          bought has exceeded my expectations.”
        </p>
      </div>
    </div>
  );
}
