import style from './Brands.module.css';

export function Brands(){
    return(
        <div className={style.brands}>
            <a href="">
                <img src='icons/versace.svg' />
            </a>
            <a href="">
                <img src="icons/zara-logo.svg" alt="" />
            </a>
            <a href="">
                <img src="icons/gucci-logo.svg" alt="" />
            </a>
            <a href="">
                <img src="icons/prada-logo.svg" alt="" />
            </a>
            <a href="">
                <img src="icons/CalvinKlein.svg" alt="" />
            </a>

        </div>
    )
}