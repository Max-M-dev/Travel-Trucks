
import css from './Filters.module.css'

const Filters = () => {
    return (
        <div className={css.container}>
            <div className={css.location}>
                <p className={css.label}>Location</p>
                <input
                    type="text"
                    className={css.input}
                // value={filter}
                // onChange={(e) => dispatch(changeFilter(e.target.value))}
                />
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
                            <button className={css.btn}>
                                <svg width="32" height="32">
                                    <use href="/sprite.svg#icon-wind" >
                                    </use>
                                </svg>
                                AC
                            </button>
                        </li>
                        <li className={css.item}>
                            <button className={css.btn}>
                                <svg width="32" height="32">
                                    <use href="/sprite.svg#icon-diagram" >
                                    </use>
                                </svg>
                                Automatic
                            </button>
                        </li>
                        <li className={css.item}>
                            <button className={css.btn}>
                                <svg width="32" height="32">
                                    <use href="/sprite.svg#icon-cup" >
                                    </use>
                                </svg>
                                Kitchen
                            </button>
                        </li>
                        <li className={css.item}>
                            <button className={css.btn}>
                                <svg width="32" height="32">
                                    <use href="/sprite.svg#icon-tv" >
                                    </use>
                                </svg>
                                TV
                            </button>
                        </li>
                        <li className={css.item}>
                            <button className={css.btn}>
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
                            <button className={css.btn}>
                                <svg width="32" height="32">
                                    <use href="/sprite.svg#icon-grid" >
                                    </use>
                                </svg>
                                Van
                            </button>
                        </li>
                        <li className={css.item}>
                            <button className={css.btn}>
                                <svg width="32" height="32">
                                    <use href="/sprite.svg#icon-integration" >
                                    </use>
                                </svg>
                                Fully integrated
                            </button>
                        </li>
                        <li className={css.item}>
                            <button className={css.btn}>
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
            <button type="button" className={css.search}>Search</button>
        </div>
    )
}

export default Filters
