import css from './Filters.module.css';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectEquipment,
  selectFormFilter,
  selectLocationFilter,
  selectTransmissionFilter,
} from '../../redux/filters/selectors.js';
import { changeFilter } from '../../redux/filters/slice';

const Filters = ({ onSearch }) => {
  const dispatch = useDispatch();

  const equipment = useSelector(selectEquipment);
  const transmission = useSelector(selectTransmissionFilter);
  const form = useSelector(selectFormFilter);
  const location = useSelector(selectLocationFilter);

  const handleFilterChange = (filter, value) => {
    dispatch(changeFilter({ filter, value }));
  };

  const toggleItemInArray = (array, item) => {
    if (array.indexOf(item) != -1) {
      return array.filter(currentItem => currentItem != item);
    } else {
      return [...array, item];
    }
  };
  const existInArray = (array, item) => array.indexOf(item) !== -1;
  const curryingFunc = (func, array) => item => func(array, item);
  /* === */
  const existInEquipment = curryingFunc(existInArray, equipment);
  const toggleItemInEquipment = curryingFunc(toggleItemInArray, equipment);
  const toggleItemInForm = curryingFunc(
    (string, value) => (string === value ? '' : value),
    form
  );

  const performSearch = () => {
    onSearch();
  };

  const cssToggleItemActive = isActiveItem =>
    isActiveItem ? `${css.item} ${css.item_active}` : css.item;
  const debounce = (func, timeout = 300) => {
    let timerId;
    return (...arg) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => func.apply(this, arg), timeout);
    };
  };
  const handleFilterChangeDebounce = debounce(handleFilterChange, 1000);
  return (
    <div className={css.container}>
      <div className={css.location}>
        <p className={css.label}>Location</p>
        <input
          type="text"
          className={css.input}
          // value={location}
          onChange={e => handleFilterChangeDebounce('location', e.target.value)}
        />
        <svg className={css.map} width="20" height="20">
          <use href="/sprite.svg#icon-map"></use>
        </svg>
      </div>
      <div>
        <p className={css.label}>Filters</p>
        <div className={css.filters}>
          <h3 className={css.subtitle}>Vehicle equipment</h3>
          <ul className={css.list}>
            <li
              className={cssToggleItemActive(existInEquipment('AC'))}
              onClick={() =>
                handleFilterChange('equipment', toggleItemInEquipment('AC'))
              }
            >
              <button className={css.btn}>
                <svg width="32" height="32">
                  <use href="/sprite.svg#icon-wind"></use>
                </svg>
                AC
              </button>
            </li>
            <li
              className={cssToggleItemActive(transmission !== '')}
              onClick={() =>
                handleFilterChange(
                  'transmission',
                  transmission === '' ? 'automatic' : ''
                )
              }
            >
              <button className={css.btn}>
                <svg width="32" height="32">
                  <use href="/sprite.svg#icon-diagram"></use>
                </svg>
                Automatic
              </button>
            </li>
            <li
              className={cssToggleItemActive(existInEquipment('kitchen'))}
              onClick={() =>
                handleFilterChange(
                  'equipment',
                  toggleItemInEquipment('kitchen')
                )
              }
            >
              <button className={css.btn}>
                <svg width="32" height="32">
                  <use href="/sprite.svg#icon-cup"></use>
                </svg>
                Kitchen
              </button>
            </li>
            <li
              className={cssToggleItemActive(existInEquipment('TV'))}
              onClick={() =>
                handleFilterChange('equipment', toggleItemInEquipment('TV'))
              }
            >
              <button className={css.btn}>
                <svg width="32" height="32">
                  <use href="/sprite.svg#icon-tv"></use>
                </svg>
                TV
              </button>
            </li>
            <li
              className={cssToggleItemActive(existInEquipment('bathroom'))}
              onClick={() =>
                handleFilterChange(
                  'equipment',
                  toggleItemInEquipment('bathroom')
                )
              }
            >
              <button className={css.btn}>
                <svg width="32" height="32">
                  <use href="/sprite.svg#icon-bath"></use>
                </svg>
                Bathroom
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={css.subtitle}>Vehicle type</h3>
          <ul className={css.list}>
            <li
              className={cssToggleItemActive(form === 'panelTruck')}
              onClick={() =>
                handleFilterChange('form', toggleItemInForm('panelTruck'))
              }
            >
              <button className={css.btn}>
                <svg width="32" height="32">
                  <use href="/sprite.svg#icon-grid"></use>
                </svg>
                Van
              </button>
            </li>
            <li
              className={cssToggleItemActive(form === 'fullyIntegrated')}
              onClick={() =>
                handleFilterChange('form', toggleItemInForm('fullyIntegrated'))
              }
            >
              <button className={css.btn}>
                <svg width="32" height="32">
                  <use href="/sprite.svg#icon-integration"></use>
                </svg>
                Fully integrated
              </button>
            </li>
            <li
              className={cssToggleItemActive(form === 'alcove')}
              onClick={() =>
                handleFilterChange('form', toggleItemInForm('alcove'))
              }
            >
              <button className={css.btn}>
                <svg width="32" height="32">
                  <use href="/sprite.svg#icon-vector"></use>
                </svg>
                Alcove
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button type="button" className={css.search} onClick={performSearch}>
        Search
      </button>
    </div>
  );
};

export default Filters;
