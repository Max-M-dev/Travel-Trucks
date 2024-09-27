
import Vehicle from "../Vehicle/Vehicle"

import { useSelector } from "react-redux";
import { selectFilteredCampers } from "../../redux/vehicles/selectors.js";

import css from './CatalogList.module.css'

const CatalogList = () => {

    const campers = useSelector(selectFilteredCampers);

    console.log(campers);

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
            <button className={css.more} type="button">Load more</button>
        </div>
    )
}

export default CatalogList
