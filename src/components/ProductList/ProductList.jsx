import { ProductCard } from "../ProductCard";
import style from "./ProductList.module.css";

export function ProductList() {
  return (
    <div className={style.container}>
      <h3>NEW ARRIVALS</h3>
      <div className={style.products}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {/* <button>View All</button>
      <hr/> */}
    </div>
  );
}
