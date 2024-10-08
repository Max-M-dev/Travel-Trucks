
import CatalogList from "../../components/CatalogList/CatalogList"
import Filters from "../../components/Filters/Filters"

import { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from "../../redux/campers/operations.js";
import { selectError, selectIsLoading } from '../../redux/campers/selectors.js';

// import { selectNameFilter, selectLocationFilter, selectFormFilter, selectACFilter, selectTransmissionFilter, selectKitchenFilter, selectTVFilter, selectBathroomFilter } from '../../redux/filters/selectors.js';

import css from './CatalogPage.module.css';

const CatalogPage = () => {

    const dispatch = useDispatch();

    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

    const [page, setPage] = useState(1);
    const limit = 5;

    const filters = useSelector(state => state.filters);

    // const location = useSelector(selectLocationFilter);
    // const name = useSelector(selectNameFilter);
    // const form = useSelector(selectFormFilter);
    // const transmission = useSelector(selectTransmissionFilter);
    // const kitchen = useSelector(selectKitchenFilter);
    // const TV = useSelector(selectTVFilter);
    // const bath = useSelector(selectBathroomFilter);
    // const AC = useSelector(selectACFilter);

    // const filters = useMemo(() => ({
    //     name, location, form, transmission, kitchen, TV, bath, AC
    // }), [name, location, form, transmission, kitchen, TV, bath, AC]);

    const performSearch = useCallback(() => {
        setPage(1);
        dispatch(fetchCampers({ page: 1, limit, filters }));
    }, [dispatch, limit, filters]);

    useEffect(() => {
        dispatch(fetchCampers({ page, limit, filters }));
    }, [dispatch, page, filters]);


    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };


    return (
        <main className={css.container}>
            {isLoading && <p>Loading campers...</p>}
            {error && <p>{error}</p>}
            <Filters onSearch={performSearch} />
            <CatalogList load={handleLoadMore} />
        </main>
    )
}

export default CatalogPage
