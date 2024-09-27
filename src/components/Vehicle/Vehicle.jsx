
import css from './Vehicle.module.css';
import { NavLink } from 'react-router-dom'

const Vehicle = () => {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <img className={css.img} src="/images/mavericks.jpg" alt="Mavericks" />
                <div>
                    <div className={css.top}>
                        <h2 className={css.title}>Mavericks</h2>
                        <p className={css.title}>€8000.00</p>
                        <button className={css.like} type='button'>
                            <svg className={css.heart} width="26" height="24">
                                <use href="/sprite.svg#icon-heart" >
                                </use>
                            </svg>
                        </button>
                    </div>
                    <div className={css.middle}>
                        <div className={css.paragraph}>
                            <svg className={css.star} width="16" height="16" >
                                <use href="/sprite.svg#icon-star" >
                                </use>
                            </svg>
                            <p>4.4(2 Reviews)</p>
                        </div>
                        <div className={css.paragraph}>
                            <svg width="16" height="16">
                                <use href="/sprite.svg#icon-map" >
                                </use>
                            </svg>
                            <p>Kyiv, Ukraine</p>
                        </div>
                    </div>
                    <p className={css.text}>Embrace simplicity and freedom with the Mavericks panel truck...</p>
                    <div className={css.bottom}>
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
                                    <use href="/sprite.svg#icon-wind" >
                                    </use>
                                </svg>
                                Radio
                            </li>
                        </ul>
                    </div>
                    <NavLink className={css.btn} to="/catalog/:id">Show more</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Vehicle
