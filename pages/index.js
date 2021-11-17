import Head from "next/head";
import Image from "next/image";
import styles from "../css/layout.module.css";

import tempe from "../assets/1copy.jpg";

const Home = () => {
  return (
    <>
      <Head>
        <title>MENDOAN.ID</title>
      </Head>
      {/* ====== TEXTBOX ========= */}
      <div className={styles.textBox}>
        <div className={`container ${styles.intro}`}>
          <h1 className={styles.display4}>
            Mau ada tamu datang atau ga, pesan gorengan di <span>Mendoan</span>{" "}
            aja!
          </h1>
          <p>
            Cobain deh, gorengan paling hits di <span>Indonesia</span> sekarang
            juga dari rumah kamu!
          </p>
          <div className={styles.tombol}>
            <a
              href="/login"
              type="button"
              className="btn btn-warning"
              style={{ borderRadius: "10px" }}
            >
              <h6>Pesan Sekarang</h6>
            </a>
          </div>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="container">
        {/* ===== PANEL ===== */}
        <div className="row justify-content-center" style={{ height: "0" }}>
          <div className={`col-10 ${styles.info}`}>
            <div className="row">
              <div className={`col-lg-3 ${styles.panel}`}>
                <i className="bi bi-stopwatch-fill"></i>
                <div className={styles.textPanel}>
                  <h6>Cuma 15 menit</h6>
                  <p>sudah diatas piring</p>
                </div>
              </div>
              <div className={`col-lg-3 ${styles.panel}`}>
                <i className="bi bi-patch-check"></i>
                <div className={styles.textPanel}>
                  <h6>Bahan segar & halal</h6>
                  <p>jaminan mutu</p>
                </div>
              </div>
              <div className={`col-lg-3 ${styles.panel}`}>
                <i className="bi bi-geo-alt"></i>
                <div className={styles.textPanel}>
                  <h6>Tracking</h6>
                  <p>semua pesanan</p>
                </div>
              </div>
              <div className={`col-lg-3 ${styles.panel}`}>
                <i className="bi bi-coin"></i>
                <div className={styles.textPanel}>
                  <h6>Free Ongkir</h6>
                  <p>min. order IDR 70k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== PRODUCT MENU ======= */}
      <div className="row justify-content-center" style={{ width: "100%" }}>
        <div className={`col-12 ${styles.menu}`}>
          <h3>Menu Spesial</h3>
        </div>
        <div className={`card ${styles.cardMenu}`} style={{ width: "25rem" }}>
          {/* <Image src={cr1} width="1000px" height="500px" /> */}
          <Image
            src={tempe}
            className={`card-img-top ${styles.imgMenu}`}
            alt=""
          />
          <div className={`card-body ${styles.cardBody}`}>
            <div className={styles.topTitle}>
              <h4 className="card-title">Tahu isi daging sapi</h4>
              <h5 className="card-title">10K</h5>
              <p className="card-title">isi 3</p>
            </div>
            <p className="card-text">
              Tahu isinya daging sapi cincang dengan bumbu spesial, terus
              digoreng dadakan
            </p>
            <div className={styles.button}>
              <a href="#" className="btn btn-warning">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
        <div className={`card ${styles.cardMenu}`} style={{ width: "25rem" }}>
          {/* <Image src={cr1} width="1000px" height="500px" /> */}
          <Image
            src={tempe}
            className={`card-img-top ${styles.imgMenu}`}
            alt=""
          />
          <div className={`card-body ${styles.cardBody}`}>
            <div className={styles.topTitle}>
              <h4 className="card-title">Bakwan cumi</h4>
              <h5 className="card-title">12K</h5>
              <p className="card-title">isi 3</p>
            </div>
            <p className="card-text">
              Bakwan isinya cumi sapi cincang dengan bumbu spesial, terus
              digoreng dadakan
            </p>
            <div className={styles.button}>
              <a href="#" className="btn btn-warning">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
        <div className={`card ${styles.cardMenu}`} style={{ width: "25rem" }}>
          {/* <Image src={cr1} width="1000px" height="500px" /> */}
          <Image
            src={tempe}
            className={`card-img-top ${styles.imgMenu}`}
            alt=""
          />
          <div className={`card-body ${styles.cardBody}`}>
            <div className={styles.topTitle}>
              <h4 className="card-title">Tempe mendoan lemes</h4>
              <h5 className="card-title">8K</h5>
              <p className="card-title">isi 3</p>
            </div>
            <p className="card-text">
              Tahu isinya daging sapi cincang dengan bumbu spesial, terus
              digoreng dadakan
            </p>
            <div className={styles.button}>
              <a href="#" className="btn btn-warning">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center" style={{ width: "100%" }}>
        <div className={`col-12 ${styles.menu}`}>
          <h3>Menu Spesial</h3>
        </div>
        <div className={`card ${styles.cardMenu}`} style={{ width: "25rem" }}>
          {/* <Image src={cr1} width="1000px" height="500px" /> */}
          <Image
            src={tempe}
            className={`card-img-top ${styles.imgMenu}`}
            alt=""
          />
          <div className={`card-body ${styles.cardBody}`}>
            <div className={styles.topTitle}>
              <h4 className="card-title">Tahu isi daging sapi</h4>
              <h5 className="card-title">10K</h5>
              <p className="card-title">isi 3</p>
            </div>
            <p className="card-text">
              Tahu isinya daging sapi cincang dengan bumbu spesial, terus
              digoreng dadakan
            </p>
            <div className={styles.button}>
              <a href="#" className="btn btn-warning">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
        <div className={`card ${styles.cardMenu}`} style={{ width: "25rem" }}>
          {/* <Image src={cr1} width="1000px" height="500px" /> */}
          <Image
            src={tempe}
            className={`card-img-top ${styles.imgMenu}`}
            alt=""
          />
          <div className={`card-body ${styles.cardBody}`}>
            <div className={styles.topTitle}>
              <h4 className="card-title">Bakwan cumi</h4>
              <h5 className="card-title">12K</h5>
              <p className="card-title">isi 3</p>
            </div>
            <p className="card-text">
              Bakwan isinya cumi sapi cincang dengan bumbu spesial, terus
              digoreng dadakan
            </p>
            <div className={styles.button}>
              <a href="#" className="btn btn-warning">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
        <div className={`card ${styles.cardMenu}`} style={{ width: "25rem" }}>
          {/* <Image src={cr1} width="1000px" height="500px" /> */}
          <Image
            src={tempe}
            className={`card-img-top ${styles.imgMenu}`}
            alt=""
          />
          <div className={`card-body ${styles.cardBody}`}>
            <div className={styles.topTitle}>
              <h4 className="card-title">Tempe mendoan lemes</h4>
              <h5 className="card-title">8K</h5>
              <p className="card-title">isi 3</p>
            </div>
            <p className="card-text">
              Tahu isinya daging sapi cincang dengan bumbu spesial, terus
              digoreng dadakan
            </p>
            <div className={styles.button}>
              <a href="#" className="btn btn-warning">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center" style={{ width: "100%" }}>
        <div className={`col-12 ${styles.menu}`}>
          <h3>Menu Spesial</h3>
        </div>
        <div className={`card ${styles.cardMenu}`} style={{ width: "25rem" }}>
          {/* <Image src={cr1} width="1000px" height="500px" /> */}
          <Image
            src={tempe}
            className={`card-img-top ${styles.imgMenu}`}
            alt=""
          />
          <div className={`card-body ${styles.cardBody}`}>
            <div className={styles.topTitle}>
              <h4 className="card-title">Tahu isi daging sapi</h4>
              <h5 className="card-title">10K</h5>
              <p className="card-title">isi 3</p>
            </div>
            <p className="card-text">
              Tahu isinya daging sapi cincang dengan bumbu spesial, terus
              digoreng dadakan
            </p>
            <div className={styles.button}>
              <a href="#" className="btn btn-warning">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
        <div className={`card ${styles.cardMenu}`} style={{ width: "25rem" }}>
          {/* <Image src={cr1} width="1000px" height="500px" /> */}
          <Image
            src={tempe}
            className={`card-img-top ${styles.imgMenu}`}
            alt=""
          />
          <div className={`card-body ${styles.cardBody}`}>
            <div className={styles.topTitle}>
              <h4 className="card-title">Bakwan cumi</h4>
              <h5 className="card-title">12K</h5>
              <p className="card-title">isi 3</p>
            </div>
            <p className="card-text">
              Bakwan isinya cumi sapi cincang dengan bumbu spesial, terus
              digoreng dadakan
            </p>
            <div className={styles.button}>
              <a href="#" className="btn btn-warning">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
        <div className={`card ${styles.cardMenu}`} style={{ width: "25rem" }}>
          {/* <Image src={cr1} width="1000px" height="500px" /> */}
          <Image
            src={tempe}
            className={`card-img-top ${styles.imgMenu}`}
            alt=""
          />
          <div className={`card-body ${styles.cardBody}`}>
            <div className={styles.topTitle}>
              <h4 className="card-title">Tempe mendoan lemes</h4>
              <h5 className="card-title">8K</h5>
              <p className="card-title">isi 3</p>
            </div>
            <p className="card-text">
              Tahu isinya daging sapi cincang dengan bumbu spesial, terus
              digoreng dadakan
            </p>
            <div className={styles.button}>
              <a href="#" className="btn btn-warning">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
