import style from "./Footer.module.css"

export function Footer(){
    return (
      <div className={style.footer}>
        <div className={style.footer_body}>
          <div>
            <img src="icons/SHOP.CO.svg" alt="logo" />
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className={style.icons}>
              <img src="icons/1.svg" alt="" />
              <img src="icons/2.svg" alt="" />
              <img src="icons/3.svg" alt="" />
              <img src="icons/4.svg" alt="" />
            </div>
          </div>

          <ul>
            <h6>Company</h6>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>

          <ul>
            <h6>Help</h6>
            <li>Customer Support </li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>

          <ul>
            <h6>FAQ</h6>
            <li>Account Orders </li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>

          <ul>
            <h6>Resources</h6>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
        <hr />
        <div className={style.footer_bottom}>
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div>
            <img src="icons/visa-icon.svg" alt="" />
            <img src="icons/masterCard-icon.svg" alt="" />
            <img src="icons/payPal-icon.svg" alt="" />
            <img src="icons/applePay-icon.svg" alt="" />
            <img src="icons/googlePlay-icon.svg" alt="" />
    
          </div>
        </div>
      </div>
    );
}