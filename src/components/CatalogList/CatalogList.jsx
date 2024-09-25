
import Vehicle from "../Vehicle/Vehicle"

import css from './CatalogList.module.css'

const CatalogList = () => {
    return (
        <div>
            <Vehicle />
            {/* {events.length === 0 ? (
                <p>No events found</p>
            ) : (
                <ul>
                    {events.map(event => (
                        <li key={event._id}>
                            <Event event={event} />
                        </li>
                    ))}
                </ul>)} */}
            <button className={css.more} type="button">Load more</button>
        </div>
    )
}

export default CatalogList
