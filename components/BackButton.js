/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */
import styles from '../css/back.module.css';

const BackButton = function () {
  return (
    <button type="button" className={`btn ${styles.back}`}>
      <i className="bi bi-arrow-left-circle" />
    </button>
  );
};

export default BackButton;
