import { ReviewItem } from "../ReviewItem";
import style from "./ReviewList.module.css";

export function ReviewList() {
  return (
    <div className={style.review_container}>
      <div className={style.review_header}>
        <h3>OUR HAPPY CUSTOMERS</h3>
        <div className={style.arrow_keys}>
          <a href="/">
            <img src="icons/arrow-back.svg" />
          </a>
          <a href="/">
            <img src="icons/arrow-next.svg" />
          </a>
        </div>
      </div>
      <div className={style.slider}>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>
      
    </div>
  );
}
