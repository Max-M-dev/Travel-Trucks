import css from './Loader.module.css';

const Loader = ({ size }) => {
  return (
    // <div className={css.loading}>
    <span
      className={css.loader}
      style={{ width: size ? size : '68px', height: size ? size : '68px' }}
    ></span>
    // </div>
  );
};

export default Loader;
