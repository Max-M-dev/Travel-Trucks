import CatalogList from '../../components/CatalogList/CatalogList';
import Filters from '../../components/Filters/Filters';

import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCampers,
  fetchCampersLoadMore,
} from '../../redux/campers/operations.js';
import { selectError } from '../../redux/campers/selectors.js';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const isLoading = useSelector(state => state.vehicles.isLoading);
  // console.log('isLoad', isLoading);

  const [page, setPage] = useState(1);
  const [isClickLoadMore, setIsClickLoadMore] = useState(false);
  const limit = 5;
  // console.log('isClickLoadMore', isClickLoadMore);

  const filters = useSelector(state => state.filters);

  const performSearch = useCallback(() => {
    setPage(1);
    dispatch(fetchCampers({ page: 1, limit, filters }));
  }, [dispatch, limit, filters]);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, limit, filters }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    setIsClickLoadMore(prev => true);
    setPage(prevPage => prevPage + 1);
    dispatch(fetchCampersLoadMore({ page: page + 1, limit, filters }));
  };

  const whereToShowLoader = () => {
    if (isClickLoadMore) {
      if (isLoading === false) {
        setIsClickLoadMore(prev => false);
      }
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
