import { useState } from 'react';
import { CartItem } from '../CartItem';
import style from './Cart.module.css'

export function Cart(){
   const [items, setItems] = useState([
     {
       id: self.crypto.randomUUID(),
       img: "img/productImage.png",
       name: "Gradient Graphic T-shirt",
       size: "Large",
       color: "White",
       price: 145,
       count: 1,
     },
     {
       id: self.crypto.randomUUID(),
       img: "img/shirt.png",
       name: "CHECKERED SHIRT",
       size: "Large",
       color: "White",
       price: 180,
       count: 1,
     },
     {
       id: self.crypto.randomUUID(),
       img: "img/jeans.png",
       name: "SKINNY FIT JEANS",
       size: "Large",
       color: "White",
       price: 240,
       count: 1,
     },
     {
       id: self.crypto.randomUUID(),
       img: "img/jeans.png",
       name: "SKINNY FIT JEANS",
       size: "Large",
       color: "White",
       price: 240,
       count: 1,
     },
   ]);

   function itemCountChange(itemId, newCount){
    setItems((prevState) => prevState.map(item=>{
      if(item.id===itemId){
        return {...item, count: newCount};
      }
      return item;
    })
  )}
   
   function subTotals (items){
    return items.reduce((total,item)=> total+item.price*item.count,0);
   }

   
   const subTotal = subTotals(items);
   const discount = subTotal*0.2;
   const deliveryFee=15;
   const total=subTotal-discount+deliveryFee;
   

   function removeFromCart(id) {
     setItems((list) => list.filter((el) => el.id !== id));
   }

    return (
      <div className={style.cart}>
        <p>
          Home <img src="icons/path-arrow-icon.svg" /> <span>Cart</span>
        </p>
        <h3>Your cart</h3>
        <div className={style.cart_body}>
          <div className={style.cart_items}>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onChange={(value) => itemCountChange(item.id, value)}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <div className={style.cart_price}>
            <h6>Order Summary</h6>
            <div className={style.summary}>
              <section>
                <p>Subtotal</p>
                <p className={style.price}>${subTotal}</p>
              </section>
              <section>
                <p>Discount (-20%)</p>
                <p className={style.discount}>-${discount}</p>
              </section>
              <section>
                <p>Delivery Fee</p>
                <p className={style.price}>${deliveryFee}</p>
              </section>
              <hr />
              <section className={style.total}>
                <p>Total</p>
                <p className={style.price}>${total}</p>
              </section>
            </div>
            <div className={style.promocode}>
              <div className={style.input_wrapper}>
                <img src="icons/search-icon.svg" />
                <input placeholder="Add promo code" />
              </div>
              <button>Shop Now</button>
            </div>
            <button className={style.checkOut}>
              Go to Checkout <img src="icons/arrow-next-white.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    );
}