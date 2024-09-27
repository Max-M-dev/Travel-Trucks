
import css from './Stars.module.css';

const Stars = ({ rating }) => {
    const totalStars = 5;

    return (
        <ul className={css.stars}>
            {[...Array(totalStars)].map((_, index) => {
                const isFilled = index < Math.floor(rating);
                const isHalfFilled = index === Math.floor(rating) && rating % 1 !== 0;

                return (
                    <li key={index}>
                        <svg width="16" height="16" className={css.star} style={{ fill: isFilled ? '#FFD700' : (isHalfFilled ? 'url(#half-star)' : '#f2f4f7') }}>
                            <use href="/sprite.svg#icon-star" />
                        </svg>
                    </li>
                );
            })}
        </ul>
    );
};

export default Stars;
