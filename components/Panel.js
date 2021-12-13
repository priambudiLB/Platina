/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */
import styles from '../css/layout.module.css';

const Panel = function () {
  return (
    <div className="container">
      <div className="row justify-content-center" style={{ height: '0' }}>
        <div className={`col-10 ${styles.info}`}>
          <div className="row">
            <div className={`col-lg-3 ${styles.panel}`}>
              <i className="bi bi-stopwatch-fill" />
              <div className={styles.textPanel}>
                <h6>Cuma 15 menit</h6>
                <p>sudah diatas piring</p>
              </div>
            </div>
            <div className={`col-lg-3 ${styles.panel}`}>
              <i className="bi bi-patch-check" />
              <div className={styles.textPanel}>
                <h6>Bahan segar & halal</h6>
                <p>jaminan mutu</p>
              </div>
            </div>
            <div className={`col-lg-3 ${styles.panel}`}>
              <i className="bi bi-geo-alt" />
              <div className={styles.textPanel}>
                <h6>Tracking</h6>
                <p>semua pesanan</p>
              </div>
            </div>
            <div className={`col-lg-3 ${styles.panel}`}>
              <i className="bi bi-coin" />
              <div className={styles.textPanel}>
                <h6>Free Ongkir</h6>
                <p>min. order IDR 70k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
