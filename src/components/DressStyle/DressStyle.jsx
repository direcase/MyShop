import style from "./DressStyle.module.css";
export function DressStyle() {
  return (
    <div className={style.dress}>
      <h3>BROWSE BY DRESS STYLE</h3>
      <div className={style.styles_list}>
        <div className={style.casual}>Casual</div>
        <div className={style.formal}>Formal</div>
        <div className={style.party}></div>
        <div className={style.gym}></div>
      </div>
    </div>
  );
}
