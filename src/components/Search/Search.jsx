import style from './Search.module.css';

export function Search() {
  return (
    <div className={style.input_wrapper}>
      <img src="icons/search-icon.svg" />
      <input placeholder="Search for products..." />
    </div>
  );
}
