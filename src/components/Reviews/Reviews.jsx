
import css from './Reviews.module.css'

import { useOutletContext } from 'react-router-dom';

import Stars from '../Stars/Stars';

const Reviews = () => {

    const { camper } = useOutletContext();

    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <div className={css.div}>
                    <div className={css.letter}>{camper.reviews[0].reviewer_name.charAt(0).toUpperCase()}</div>
                    <div className={css.top}>
                        <p className={css.name}>{camper.reviews[0].reviewer_name}</p>
                        <Stars rating={camper.reviews[0].reviewer_rating} />
                    </div>
                </div>
                <div>
                    <p className={css.text}>{camper.reviews[0].comment}</p>
                </div>
            </div>
            <div className={css.wrapper}>
                <div className={css.div}>
                    <div className={css.letter}>
                        {camper.reviews[1].reviewer_name.charAt(0).toUpperCase()}
                    </div>
                    <div className={css.top}>
                        <p className={css.name}>{camper.reviews[1].reviewer_name}</p>
                        <Stars rating={camper.reviews[1].reviewer_rating} />
                    </div>
                </div>
                <div>
                    <p className={css.text}>{camper.reviews[0].comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews
