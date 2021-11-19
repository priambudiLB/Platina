import Head from "next/head";
import Image from "next/image";
import styles from "../css/layout.module.css";
import Link from "next/link";
import Footer from "../components/Footer";

import tempe from "../assets/1copy.jpg";
import map from "../assets/map.png";

const HomePage = () => {
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
            <Link href="/login">
              <a
                type="button"
                className="btn btn-warning"
                style={{ borderRadius: "10px" }}
              >
                <h6>Pesan Sekarang</h6>
              </a>
            </Link>
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
      {/* ======== MENU SPESIAL ========= */}
      <div
        className="row justify-content-center"
        style={{ width: "100%", marginLeft: "0" }}
      >
        <div className={`col-12 ${styles.menuSpesial}`}>
          <h3>Menu Spesial</h3>
        </div>
        <div className={`card ${styles.cardMenu}`}>
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
                Pesan
              </a>
            </div>
          </div>
        </div>
        <div className={`card ${styles.cardMenu}`}>
          {/* <Image src={cr1} width="1000px" height="500px" /> */}
          <Image
            src={tempe}
            className={`card-img-top ${styles.imgMenu}`}
            alt=""
          />
          <div className={`card-body ${styles.cardBody}`}>
            <div className={styles.topTitle}>
              <h4 className="card-title">
                <br />
                Bakwan cumi
              </h4>
              <h5 className="card-title">12K</h5>
              <p className="card-title">isi 3</p>
            </div>
            <p className="card-text">
              Bakwan isinya cumi sapi cincang dengan bumbu spesial, terus
              digoreng dadakan
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
                Pesan
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ======== GORENGAN POPULER ======== */}
      <div
        className="row justify-content-center"
        style={{ width: "100%", marginLeft: "0" }}
      >
        <div className={`col-12 ${styles.menuPopuler}`}>
          <h3>Gorengan Populer</h3>
        </div>
        <div className={`card ${styles.cardMenu}`}>
          {/* <Image src={cr1} width="1000px" height="500px" /> */}
          <Image
            src={tempe}
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
              Cireng bukan dari resep Mang Oleh <br />
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

      {/* ======= MAP ======== */}

      <div className="row justify-content-center" style={{ width: "100%" }}>
        <div className={`col-10 ${styles.map}`}>
          <div className={styles.imgMap1}>
            <Image src={map} className={styles.imgMap} alt="" />
          </div>
          <div className={`col-8 ${styles.textMap}`}>
            <h3>Cobain sekarang!</h3>
            <h5>Sekarang kamu bisa nge-track pesanan kamu</h5>
            <h6>Disini</h6>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
