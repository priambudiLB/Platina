/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */
import Image from 'next/image';
import tempe from '../assets/1.jpg';

import styles from '../css/layout.module.css';

const GorenganPopuler = function () {
  return (
    <div
      className="row justify-content-center"
      style={{ width: '100%', marginLeft: '0' }}
    >
      <div className={`col-12 ${styles.menuPopuler}`}>
        <h3>Gorengan Populer</h3>
      </div>
      <div className={`card ${styles.cardMenu}`}>
        {/* <Image src={cr1} width="1000px" height="500px" /> */}
        <Image
          src={tempe}
          height={250}
          width={250}
          className={`card-img-top ${styles.imgMenu}`}
          alt=""
        />
        <div className={`card-body ${styles.cardBody}`}>
          <div className={styles.topTitle}>
            <h4 className="card-title">Pisang goreng</h4>
            <h5 className="card-title">10K</h5>
            <p className="card-title">isi 3</p>
          </div>
          <p className="card-text">
            Ya buah pisang digoreng pakai adonan spesial
          </p>
          <div className={styles.button}>
            <a href="#" className="btn btn-warning">
              Pesan
            </a>
          </div>
        </div>
      </div>
      <div className={`card ${styles.cardMenu}`}>
        {/* <Image src={cr1} width="1000px" height="500px" /> */}
        <Image
          src={tempe}
          height={250}
          width={250}
          className={`card-img-top ${styles.imgMenu}`}
          alt=""
        />
        <div className={`card-body ${styles.cardBody}`}>
          <div className={styles.topTitle}>
            <h4 className="card-title">Ubi ungu</h4>
            <h5 className="card-title">7K</h5>
            <p className="card-title">isi 3</p>
          </div>
          <p className="card-text">
            Ya ubi ungu digoreng pakai adonan spesial
          </p>
          <div className={styles.button}>
            <a href="#" className="btn btn-warning">
              Pesan
            </a>
          </div>
        </div>
      </div>
      <div className={`card ${styles.cardMenu}`}>
        {/* <Image src={cr1} width="1000px" height="500px" /> */}
        <Image
          src={tempe}
          height={250}
          width={250}
          className={`card-img-top ${styles.imgMenu}`}
          alt=""
        />
        <div className={`card-body ${styles.cardBody}`}>
          <div className={styles.topTitle}>
            <h4 className="card-title">Cireng original</h4>
            <h5 className="card-title">8K</h5>
            <p className="card-title">isi 3</p>
          </div>
          <p className="card-text">
            Cireng bukan dari resep Mang Oleh
            {' '}
            <br />
          </p>
          <div className={styles.button}>
            <a href="#" className="btn btn-warning">
              Pesan
            </a>
          </div>
        </div>
      </div>
      <div className={`card ${styles.cardMenu}`}>
        {/* <Image src={cr1} width="1000px" height="500px" /> */}
        <Image
          src={tempe}
          height={250}
          width={250}
          className={`card-img-top ${styles.imgMenu}`}
          alt=""
        />
        <div className={`card-body ${styles.cardBody}`}>
          <div className={styles.topTitle}>
            <h4 className="card-title">Cakwe</h4>
            <h5 className="card-title">4K</h5>
            <p className="card-title">isi 3</p>
          </div>
          <p className="card-text">Cocok dimakan pas lagi bokek</p>
          <div className={styles.button}>
            <a href="#" className="btn btn-warning">
              Pesan
            </a>
          </div>
        </div>
      </div>
      <div className={`card ${styles.cardMenu}`}>
        {/* <Image src={cr1} width="1000px" height="500px" /> */}
        <Image
          src={tempe}
          height={250}
          width={250}
          className={`card-img-top ${styles.imgMenu}`}
          alt=""
        />
        <div className={`card-body ${styles.cardBody}`}>
          <div className={styles.topTitle}>
            <h4 className="card-title">Odading</h4>
            <h5 className="card-title">4K</h5>
            <p className="card-title">isi 3</p>
          </div>
          <p className="card-text">Soulmatenya cakwe</p>
          <div className={styles.button}>
            <a href="#" className="btn btn-warning">
              Pesan
            </a>
          </div>
        </div>
      </div>
      <div className={`card ${styles.cardMenu}`}>
        {/* <Image src={cr1} width="1000px" height="500px" /> */}
        <Image
          src={tempe}
          height={250}
          width={250}
          className={`card-img-top ${styles.imgMenu}`}
          alt=""
        />
        <div className={`card-body ${styles.cardBody}`}>
          <div className={styles.topTitle}>
            <h4 className="card-title">Tahu isi tempe</h4>
            <h5 className="card-title">10K</h5>
            <p className="card-title">isi 3</p>
          </div>
          <p className="card-text">Kedelai combo hits, double trouble</p>
          <div className={styles.button}>
            <a href="#" className="btn btn-warning">
              Pesan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GorenganPopuler;
