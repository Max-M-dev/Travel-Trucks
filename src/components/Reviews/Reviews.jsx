
import css from './Reviews.module.css'

const Reviews = () => {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <div>
                    <div></div>
                    <div className={css.top}>
                        <p className={css.name}>Alice</p>
                        <ul className={css.stars}>
                            <li>
                                <svg width="16" height="16" className={css.star}>
                                    <use href="/sprite.svg#icon-star" >
                                    </use>
                                </svg>
                            </li>
                            <li>
                                <svg width="16" height="16" className={css.star}>
                                    <use href="/sprite.svg#icon-star" >
                                    </use>
                                </svg>
                            </li>
                            <li>
                                <svg width="16" height="16" className={css.star}>
                                    <use href="/sprite.svg#icon-star" >
                                    </use>
                                </svg>
                            </li>
                            <li>
                                <svg width="16" height="16" className={css.star}>
                                    <use href="/sprite.svg#icon-star" >
                                    </use>
                                </svg>
                            </li>
                            <li>
                                <svg width="16" height="16" className={css.star}>
                                    <use href="/sprite.svg#icon-star" >
                                    </use>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className={css.text}>The Mavericks panel truck was a perfect choice for my solo road trip. Compact, easy to drive, and had all the essentials. The kitchen facilities were sufficient, and the overall experience was fantastic.</p>
                </div>
            </div>
            <div className={css.wrapper}>
                <div>
                    <div></div>
                    <div className={css.top}>
                        <p className={css.name}>Bob</p>
                        <ul className={css.stars}>
                            <li>
                                <svg width="16" height="16" className={css.star}>
                                    <use href="/sprite.svg#icon-star" >
                                    </use>
                                </svg>
                            </li>
                            <li>
                                <svg width="16" height="16" className={css.star}>
                                    <use href="/sprite.svg#icon-star" >
                                    </use>
                                </svg>
                            </li>
                            <li>
                                <svg width="16" height="16" className={css.star}>
                                    <use href="/sprite.svg#icon-star" >
                                    </use>
                                </svg>
                            </li>
                            <li>
                                <svg width="16" height="16" className={css.star}>
                                    <use href="/sprite.svg#icon-star" >
                                    </use>
                                </svg>
                            </li>
                            <li>
                                <svg width="16" height="16" className={css.star}>
                                    <use href="/sprite.svg#icon-star" >
                                    </use>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className={css.text}>A decent option for solo travel. The Mavericks provided a comfortable stay, but the lack of bathroom facilities was a drawback. Good for short trips where simplicity is preferred.</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews
