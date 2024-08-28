import { useEffect, useState } from "react";
import style from "./ProductView.module.css";
import { ReviewItem } from "../ReviewItem";

const images = [
  "img/graf-t-shirt.png",
  "img/graf-t-shirt-2.png",
  "img/graf-t-shirt-3.png",
];
const colors = [
  "icons/colors/brown.svg",
  "icons/colors/green.svg",
  "icons/colors/grey.svg",
];
const sizes = [
  "Small",
  "Medium", 
  "Large",
  "X-Large"
]
const tabs = [
  "Product Details",
  "Rating & Reviews",
  "FAQs"
]

export function ProductView() {
  const [mainImg, setMainImg] = useState("img/graf-t-shirt.png");
  const [color, setColor] = useState("icons/colors/brown.svg");
  const [size, setSize] = useState("Small");
  const [counter, setCounter] = useState(1);
  const [tab, setTab]=useState(tabs[1]);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () =>
    setCounter((counter) => Math.max(counter - 1, 1));

  // useEffect(() => {
  //   onChange(counter);
  // }, [counter]);
  return (
    <div className={style.product_view}>
      <p className={style.path}>
        Home <img src="icons/path-arrow-icon.svg" /> Shop{" "}
        <img src="icons/path-arrow-icon.svg" /> Men{" "}
        <img src="icons/path-arrow-icon.svg" /> <span>T-shirts</span>
      </p>

      <div className={style.product_container}>
        <div className={style.product_images}>
          {images.map((currentImage) => (
            <img
              key={currentImage}
              src={currentImage}
              alt={currentImage}
              tabIndex={0}
              width="152px"
              height="168px"
              style={{
                ...(mainImg === currentImage && { border: "2px solid black" }),
                cursor: "pointer",
              }}
              onClick={() => {
                setMainImg(currentImage);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setMainImg(currentImage);
                }
              }}
            />
          ))}
        </div>
        <div className={style.main_image}>
          <img src={mainImg} width="444px" height="530px" alt="Main img" />
        </div>
        <div className={style.product_description}>
          <h2>One Life Graphic T-shirt</h2>
          <div className={style.stars}>
            <img src="icons/star-full.svg" />
            <img src="icons/star-full.svg" />
            <img src="icons/star-full.svg" />
            <img src="icons/star-full.svg" />
            <img src="icons/star-half.svg" />
            <p>
              <span>4.5/</span>5
            </p>
          </div>
          <div className={style.product_prise}>
            <p>$260</p>
            <p className={style.old_prise}>$300</p>
            <div className={style.discount}>-40%</div>
          </div>
          <p className={style.desc_text}>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr />
          <div>
            <p className={style.desc_text}>Select Colors</p>
            <div className={style.color_picker}>
              {colors.map((currentColor) => (
                <div>
                  <img
                    key={currentColor}
                    src={currentColor}
                    alt={currentColor}
                    className={style.color}
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setColor(currentColor);
                      console.log(currentColor);
                    }}
                  />
                  <img
                    className={style.tic}
                    src="icons/colors/tic.svg"
                    style={{
                      ...(color === currentColor && {
                        display: "block",
                      }),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div>
            <p className={style.desc_text}>Choose Size</p>
            <div className={style.sizes}>
              {sizes.map((currentSize) => (
                <div
                  className={style.size}
                  style={{
                    ...(size === currentSize && {
                      backgroundColor: "#000000",
                      color: "#fff",
                    }),
                    cursor: "pointer",
                  }}
                  onClick={() => setSize(currentSize)}
                >
                  {currentSize}
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className={style.buttons}>
            <div className={style.product_amount}>
              <img
                src="icons/minus.svg"
                alt="minus icon"
                onClick={decrementCounter}
              />
              <div>
                <span>{counter}</span>
              </div>
              <img
                src="icons/plus.svg"
                alt="plus icon"
                onClick={incrementCounter}
              />
            </div>

            <button className={style.addToCartBtn}>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className={style.tabs_container}>
        <div className={style.tab}>
          {tabs.map((currentTab) => (
            <button
              className={style.tab_button}
              style={{
                ...(tab === currentTab && {
                  color: "black",
                  borderBottom: "3px solid black",
                }),
                cursor: "pointer",
              }}
              onClick={() => {
                setTab(currentTab);
                console.log(tab);
              }}
            >
              {currentTab}
            </button>
          ))}
        </div>

        <div
          id="Product Details"
          className={style.tabcontent}
          style={{
            ...(tab === "Product Details" && {
              display: "block",
            }),
          }}
        >
          Product Details
        </div>

        <div
          id="Rating & Reviews"
          className={style.tabcontent}
          style={{
            ...(tab === "Rating & Reviews" && {
              display: "block",
            }),
          }}
        >
          <div className={style.review_header}>
            <div className={style.tabcontent_header}>
              All Reviews <span>(564)</span>
            </div>
            <div className={style.review_header}>
              <select name="review" id="">
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="worst">Worst</option>
              </select>
              <button className={style.review_btn}>Write a Review</button>
            </div>
          </div>
          <div className={style.review_list}>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </div>
        </div>

        <div
          id="FAQs"
          className={style.tabcontent}
          style={{
            ...(tab === "FAQs" && {
              display: "block",
            }),
          }}
        >
          FAQs
        </div>
      </div>
    </div>
  );
}
