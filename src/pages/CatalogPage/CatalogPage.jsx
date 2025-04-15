import CatalogList from '../../components/CatalogList/CatalogList';
import Filters from '../../components/Filters/Filters';

import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCampers,
  fetchCampersLoadMore,
} from '../../redux/campers/operations.js';
import { selectError, selectIsLoading } from '../../redux/campers/selectors.js';

// import { selectNameFilter, selectLocationFilter, selectFormFilter, selectACFilter, selectTransmissionFilter, selectKitchenFilter, selectTVFilter, selectBathroomFilter } from '../../redux/filters/selectors.js';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const [page, setPage] = useState(1);
  const [isClickLoadMore, setIsClickLoadMore] = useState(false);
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
    dispatch(fetchCampers({ page: 1, limit, filters }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    setIsClickLoadMore(true);
    setPage(prevPage => prevPage + 1);
    dispatch(fetchCampersLoadMore({ page: page + 1, limit, filters }));
  };

  const whereToShowLoader = () => {
    if (isClickLoadMore) {
      setIsClickLoadMore(false);
      return 'loadMore';
    }
    return 'main';
  };

  return (
    <main className={css.container}>
      <Filters onSearch={performSearch} />
      <CatalogList
        load={handleLoadMore}
        isLoading={isLoading}
        error={error}
        whereToShowLoader={whereToShowLoader()}
      />
    </main>
  );
};

export default CatalogPage;
