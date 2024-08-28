import { ProductCard } from "../ProductCard";
import style from "./Category.module.css";

export function Category(){
    return (
      <div className={style.container}>
        <p className={style.path}>
          Home <img src="icons/path-arrow-icon.svg" /> <span>Casual</span>
        </p>
        <div className={style.container_content}>
          <div className={style.filter}>
            <div className={style.filter_header}>Filters</div>
            <hr />
            <div className={style.filter_list}>
              <p>T-shirts</p>
              <p>
                <img src="icons/path-arrow-icon.svg" />
              </p>
            </div>
            <div className={style.filter_list}>
              <p>Shorts</p>
              <p>
                <img src="icons/path-arrow-icon.svg" />
              </p>
            </div>
            <div className={style.filter_list}>
              <p>Shirts</p>
              <p>
                <img src="icons/path-arrow-icon.svg" />
              </p>
            </div>
            <div className={style.filter_list}>
              <p>Hoodie</p>
              <p>
                <img src="icons/path-arrow-icon.svg" />
              </p>
            </div>
            <div className={style.filter_list}>
              <p>Jeans</p>
              <p>
                <img src="icons/path-arrow-icon.svg" />
              </p>
            </div>
            <hr />
            <div className={style.filter_header}>Price</div>
            <div className={style.slider}>
              <div className={style.progress}></div>
            </div>
            <div className={style.range_input}>
              <input type="range" className={style.range_min} min="0" max="10000"  step="100" />
              <input type="range" className={style.range_max} min="0" max="10000"  step="100" />
            </div>
            <hr />
            <div className={style.filter_header}>Colors</div>
            <hr />
            <div className={style.filter_header}>Size</div>
            <hr />
            <div className={style.filter_header}>Dress Style</div>
            <p>Casual</p>
            <p>Formal</p>
            <p>Party</p>
            <p>Gym</p>
            <button>Apply Filter</button>
          </div>

          <div>
            <div className={style.category_header}>Casual</div>
            <div className={style.items_content}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    );
}