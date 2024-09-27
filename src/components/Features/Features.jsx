
import css from './Feature.module.css';

const Features = () => {
    return (
        <div className={css.container}>
            <ul className={css.list}>
                <li className={css.item}>
                    <svg width="20" height="20">
                        <use href="/sprite.svg#icon-diagram" >
                        </use>
                    </svg>
                    Automatic
                </li>
                <li className={css.item}>
                    <svg width="20" height="20">
                        <use href="/sprite.svg#icon-wind" >
                        </use>
                    </svg>
                    AC
                </li>
                <li className={css.item}>
                    <svg width="20" height="20">
                        <use href="/sprite.svg#icon-fuel" >
                        </use>
                    </svg>
                    Petrol
                </li>
                <li className={css.item}>
                    <svg width="20" height="20">
                        <use href="/sprite.svg#icon-cup" >
                        </use>
                    </svg>
                    Kitchen
                </li>
                <li className={css.item}>
                    <svg width="20" height="20">
                        <use href="/sprite.svg#icon-radio" >
                        </use>
                    </svg>
                    AC
                </li>
            </ul>
            <div className={css.wrapper}>
                <h2 className={css.title}>Vehicle details</h2>
                <div className={css.box}>
                    <ul className={css.table}>
                        <li className={css.li}>Form</li>
                        <li className={css.li}>Length</li>
                        <li className={css.li}>Width</li>
                        <li className={css.li}>Height</li>
                        <li className={css.li}>Tank</li>
                        <li className={css.li}>Consumption</li>
                    </ul>
                    <ul className={css.second}>
                        <li className={css.values}>Panel truck</li>
                        <li className={css.values}>5.4m</li>
                        <li className={css.values}>2.01m</li>
                        <li className={css.values}>2.05m</li>
                        <li className={css.values}>132 l</li>
                        <li className={css.values}>12.41/100km</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Features
