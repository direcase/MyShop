import style from "./Banner.module.css";

export function Banner({ onClose = () => {}, isOpen = true }) {
    if (!isOpen) return null;

    return (
    <>
      <div className={style.banner}>
        <div className={style.text}>
           Sign up and get 20% off to your first order. <a href="/sign-in"> Sign Up Now</a>
        </div>
         <img onClick={onClose} src="/icons/close.svg" />
      </div>
    </>
  );
}
