
import CatalogList from "../../components/CatalogList/CatalogList"
import Filters from "../../components/Filters/Filters"

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from "../../redux/campers/operations.js";
import { selectError, selectIsLoading, selectFilteredCampers } from '../../redux/campers/selectors.js';

import css from './CatalogPage.module.css';

const CatalogPage = () => {

    const dispatch = useDispatch();

    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const campers = useSelector(selectFilteredCampers);

    useEffect(() => {
        dispatch(fetchCampers({ page: 1, limit: 5 }));
    }, [dispatch]);

    const handleLoadMore = () => {
        const nextPage = Math.ceil(campers.length / 5) + 1;
        dispatch(fetchCampers({ page: nextPage, limit: 5 }));
    };

    return (
        <main className={css.container}>
            {isLoading && <p>Loading campers...</p>}
            {error && <p>{error}</p>}
            <Filters />
            <CatalogList />
            <button className={css.more} type="button" onClick={handleLoadMore}>Load more</button>
        </main>
    )
}

export default CatalogPage
