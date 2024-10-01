
import CatalogList from "../../components/CatalogList/CatalogList"
import Filters from "../../components/Filters/Filters"

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from "../../redux/campers/operations.js";
import { selectError, selectIsLoading } from '../../redux/campers/selectors.js';

import css from './CatalogPage.module.css';

const CatalogPage = () => {

    const dispatch = useDispatch();

    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

    const [page, setPage] = useState(1);
    const limit = 5;

    useEffect(() => {
        dispatch(fetchCampers({ page, limit }));
    }, [dispatch, page]);

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };


    return (
        <main className={css.container}>
            {isLoading && <p>Loading campers...</p>}
            {error && <p>{error}</p>}
            <Filters />
            <CatalogList load={handleLoadMore} />
        </main>
    )
}

export default CatalogPage
