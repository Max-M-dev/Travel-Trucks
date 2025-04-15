import Vehicle from '../Vehicle/Vehicle';
import Loader from '../Loader/Loader';

import { useSelector } from 'react-redux';
import {
  selectFilteredCampers,
  selectCampersServerTotalItems,
} from '../../redux/campers/selectors.js';

import css from './CatalogList.module.css';

const CatalogList = ({ load, isLoading, whereToShowLoader, error }) => {
  const campers = useSelector(selectFilteredCampers);
  const serverTotalItems = useSelector(selectCampersServerTotalItems);

  const isShowBtnMore = () => serverTotalItems > campers.length;
  if (error) {
    return <p>{error}</p>;
  }
  console.log(whereToShowLoader);

  return (
    <div className={css.content}>
      {isLoading && whereToShowLoader === 'main' && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            padding: '15px 0',
          }}
        >
          <Loader size="64px" />
        </div>
      )}
      {campers.length === 0 && !isLoading ? (
        <p>No campers found</p>
      ) : (
        <ul>
          {campers.map(camper => (
            <li key={camper.id}>
              <Vehicle camper={camper} />
            </li>
          ))}
        </ul>
      )}
      {isShowBtnMore() && (
        <button className={css.more} type="button" onClick={load}>
          {isLoading && whereToShowLoader === 'loadMore' ? (
            <Loader size="30px" />
          ) : (
            'Load more'
          )}
        </button>
      )}
    </div>
  );
};

export default CatalogList;
