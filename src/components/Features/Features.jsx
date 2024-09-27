
import css from './Feature.module.css';
import { equipment } from '../../equipment';

import { useOutletContext } from 'react-router-dom';

const Features = () => {

    const { camper } = useOutletContext();

    return (
        <div className={css.container}>
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
                        <li className={css.values}>{camper.form}</li>
                        <li className={css.values}>{camper.length}</li>
                        <li className={css.values}>{camper.width}</li>
                        <li className={css.values}>{camper.height}</li>
                        <li className={css.values}>{camper.tank}</li>
                        <li className={css.values}>{camper.consumption}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Features
