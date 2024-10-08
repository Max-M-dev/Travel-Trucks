
import css from './Filters.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { selectACFilter, selectTransmissionFilter, selectKitchenFilter, selectTVFilter, selectBathroomFilter } from '../../redux/filters/selectors.js';
import { changeFilter } from '../../redux/filters/slice';

const Filters = ({ onSearch }) => {

    const dispatch = useDispatch();

    const transmission = useSelector(selectTransmissionFilter);
    const kitchen = useSelector(selectKitchenFilter);
    const tv = useSelector(selectTVFilter);
    const bath = useSelector(selectBathroomFilter);
    const ac = useSelector(selectACFilter);

    const handleFilterChange = (filter, value) => {
        dispatch(changeFilter({ filter, value }));
    };

    const performSearch = () => {
        onSearch();
    };

    return (
        <div className={css.container}>
            <div className={css.location}>
                <p className={css.label}>Location</p>
                <input
                    type="text"
                    className={css.input}
                    // value={filter}
                    onChange={(e) => handleFilterChange("location", e.target.value)} />
                <svg className={css.map} width="20" height="20">
                    <use href="/sprite.svg#icon-map" >
                    </use>
                </svg>
            </div>
            <div>
                <p className={css.label}>Filters</p>
                <div className={css.filters}>
                    <h3 className={css.subtitle}>Vehicle equipment</h3>
                    <ul className={css.list}>
                        <li className={css.item}>
                            <button className={css.btn} onClick={() => handleFilterChange("AC", !ac)}>
                                <svg width="32" height="32">
                                    <use href="/sprite.svg#icon-wind" >
                                    </use>
                                </svg>
                                AC
                            </button>
                        </li>
                        <li className={css.item}>
                            <button className={css.btn} onClick={() => handleFilterChange("transmission", "automatic")}>
                                <svg width="32" height="32">
                                    <use href="/sprite.svg#icon-diagram" >
                                    </use>
                                </svg>
                                Automatic
                            </button>
                        </li>
                        <li className={css.item}>
                            <button className={css.btn} onClick={() => handleFilterChange("kitchen", !kitchen)}>
                                <svg width="32" height="32">
                                    <use href="/sprite.svg#icon-cup" >
                                    </use>
                                </svg>
                                Kitchen
                            </button>
                        </li>
                        <li className={css.item}>
                            <button className={css.btn} onClick={() => handleFilterChange("TV", !tv)}>
                                <svg width="32" height="32">
                                    <use href="/sprite.svg#icon-tv" >
                                    </use>
                                </svg>
                                TV
                            </button>
                        </li>
                        <li className={css.item}>
                            <button className={css.btn} onClick={() => handleFilterChange("bathroom", !bath)}>
                                <svg width="32" height="32">
                                    <use href="/sprite.svg#icon-bath" >
                                    </use>
                                </svg>
                                Bathroom
                            </button>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className={css.subtitle}>Vehicle type</h3>
                    <ul className={css.list}>
                        <li className={css.item}>
                            <button className={css.btn} onClick={() => handleFilterChange("form", "panelTruck")}>
                                <svg width="32" height="32">
                                    <use href="/sprite.svg#icon-grid" >
                                    </use>
                                </svg>
                                Van
                            </button>
                        </li>
                        <li className={css.item}>
                            <button className={css.btn} onClick={() => handleFilterChange("form", "fullyIntegrated")}>
                                <svg width="32" height="32">
                                    <use href="/sprite.svg#icon-integration" >
                                    </use>
                                </svg>
                                Fully integrated
                            </button>
                        </li>
                        <li className={css.item}>
                            <button className={css.btn} onClick={() => handleFilterChange("form", "alcove")}>
                                <svg width="32" height="32">
                                    <use href="/sprite.svg#icon-vector" >
                                    </use>
                                </svg>
                                Alcove
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <button type="button" className={css.search} onClick={performSearch}>Search</button>
        </div>
    )
}

export default Filters
