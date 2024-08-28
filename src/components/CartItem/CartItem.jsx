import { useEffect, useState } from 'react';
import style from './CartItem.module.css';

export function CartItem({ item, onChange, removeFromCart}) {
  const [counter, setCounter] = useState(item.count);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () =>
    setCounter((counter) => Math.max(counter - 1, 1));

  useEffect(() => {
    onChange(counter);
  }, [counter]);

  return (
    <div className={style.cart_item}>
      <img className={style.product_img} src={item.img} alt="product image" />
      <div className={style.item_description}>
        <div>
          <h6>{item.name}</h6>
          <p>
            <span>Size: </span>
            {item.size}
          </p>
          <p>
            <span>Color: </span>
            {item.color}
          </p>
          <p className={style.price}>${item.price * item.count}</p>
        </div>
        <div className={style.product_btns}>
          <img
            src="icons/trash-icon.svg"
            alt="trash icon"
            onClick={()=>removeFromCart(item.id)}
          />
          <div className={style.product_amount}>
            <img
              src="icons/minus.svg"
              alt="minus icon"
              onClick={decrementCounter}
            />
            <p>
              <span>{counter}</span>
            </p>
            <img
              src="icons/plus.svg"
              alt="plus icon"
              onClick={incrementCounter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}