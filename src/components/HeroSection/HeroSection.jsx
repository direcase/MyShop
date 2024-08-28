import style from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <div className={style.hero_section}>
      <div className={style.all_text}>
        <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
        <div className={style.description}>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </div>
        <button>Shop Now</button>
        <div className={style.information}>
          <div className={style.info_item}>
            <h5>200+</h5>
            <p className={style.description}>International Brands</p>
          </div>
          <div className={style.info_item}>
            <h5>2,000+</h5>
            <p className={style.description}>High-Quality Products</p>
          </div>
          <div className={style.info_item}>
            <h5>30,000+</h5>
            <p className={style.description}>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
