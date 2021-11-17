import styles from "../css/layout.module.css";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
