
import CatalogList from "../../components/CatalogList/CatalogList"
import Filters from "../../components/Filters/Filters"

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from "../../redux/Vehicles/operations";
import { selectError, selectIsLoading } from '../../redux/vehicles/selectors.js';

import css from './CatalogPage.module.css';

const CatalogPage = () => {

    const dispatch = useDispatch();

    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    return (
        <main className={css.container}>
            {isLoading && <p>Loading campers...</p>}
            {error && <p>{error}</p>}
            <Filters />
            <CatalogList />
        </main>
    )
}

export default CatalogPage
