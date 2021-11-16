import styles from "../css/layout.module.css";

const Home = () => {
  return (
    <>
      {/* ====== TEXTBOX ========= */}
      <div className={styles.textBox}>
        <div className="container">
          <div className={styles.intro}>
            <h1 className={styles.display4}>
              Mau ada tamu datang atau ga, pesan gorengan di{" "}
              <span>Mendoan</span> aja!
            </h1>
            <p>
              Cobain deh, gorengan paling hits di <span>Indonesia</span>{" "}
              sekarang juga dari rumah kamu!
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
      </div>
      {/* =====CONTENT===== */}
      <div className="container">
        <h2>CONTENT</h2>
      </div>
    </>
  );
};

export default Home;
