
import css from './Vehicle.module.css';
import { NavLink } from 'react-router-dom';
import { equipment } from '../../equipment';

const Vehicle = ({ camper }) => {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <img className={css.img} src={camper.gallery[0].original} alt="Camper" />
                <div className={css.box}>
                    <div className={css.div}>
                        <div className={css.top}>
                            <h2 className={css.title}>{camper.name}</h2>
                            <p className={css.title}>{camper.price.toFixed(2)}</p>
                        </div>
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
                            <p>{camper.rating}({camper.reviews.length} Reviews)</p>
                        </div>
                        <div className={css.paragraph}>
                            <svg width="16" height="16">
                                <use href="/sprite.svg#icon-map" >
                                </use>
                            </svg>
                            <p>{camper.location}</p>
                        </div>
                    </div>
                    <p className={css.text}>{camper.description}</p>
                    <div className={css.bottom}>
                        <ul className={css.list}>
                            {equipment.map(item => {
                                const value = camper[item.key];
                                if (value === true || typeof value === "string") {
                                    return (
                                        <li className={css.item} key={item.key}>
                                            <svg width="20" height="20">
                                                <use href={`/sprite.svg#${item.icon}`} />
                                            </svg>
                                            {typeof value === "string" ? value : item.label}
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    </div>
                    <NavLink className={css.btn} to={`/catalog/${camper.id}`}>Show more</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Vehicle
