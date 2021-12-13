/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */
import Link from 'next/link';

import styles from '../css/layout.module.css';

const TextBox = function () {
  return (
    <>
      {/* ====== TEXTBOX ========= */}
      <div className={styles.textBox}>
        <div className={`container ${styles.intro}`}>
          <h1 className={styles.display4}>
            Mau ada tamu datang atau ga, pesan gorengan di
            {' '}
            <span>Mendoan</span>
            {' '}
            aja!
          </h1>
          <p>
            Cobain deh, gorengan paling hits di
            {' '}
            <span>Indonesia</span>
            {' '}
            sekarang
            juga dari rumah kamu!
          </p>
          <div className={styles.tombol}>
            <Link href="/login">
              <a
                type="button"
                className="btn btn-warning"
                style={{ borderRadius: '10px' }}
              >
                <h6>Pesan Sekarang</h6>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBox;
