/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */
import styles from '../css/loading.module.css';

const Loading = function () {
  return (
    <div
      className={`position-fixed w-100 h-100 text-center ${styles.loading}`}
      style={{
        background: '#0009',
        color: 'white',
        top: '0',
        left: '0',
        zIndex: '9',
      }}
    >
      <div className={styles.configure}>
        <div className={styles.centerize}>
          <div className={styles.section}>
            <div className={styles.bgColor}>
              <div className={styles.loader} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
