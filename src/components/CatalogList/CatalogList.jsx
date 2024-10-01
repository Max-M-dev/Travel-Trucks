
import Vehicle from "../Vehicle/Vehicle"

import { useSelector } from "react-redux";
import { selectFilteredCampers } from "../../redux/campers/selectors.js";

import css from './CatalogList.module.css'

const CatalogList = ({ load }) => {

    const campers = useSelector(selectFilteredCampers);

    return (
        <div>
            {campers.length === 0 ? (
                <p>No campers found</p>
            ) : (
                <ul>
                    {campers.map(camper => (
                        <li key={camper.id}>
                            <Vehicle camper={camper} />
                        </li>
                    ))}
                </ul>)}
            <button className={css.more} type="button" onClick={load}>Load more</button>
        </div>
    )
}

export default CatalogList
