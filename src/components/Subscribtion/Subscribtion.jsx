import style from './Subscription.module.css';

export function Subscription(){
    return (
      <div className={style.subscription_container}>
        <h3>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
        <div>
          <div className={style.input_wrapper}>
            <img src="icons/mail-icon.svg" />
            <input placeholder="Enter your email address" />
          </div>
          <button>Subscribe to Newsletter</button>
        </div>
      </div>
    );
}