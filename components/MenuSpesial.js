import Image from "next/image";
import tempe from "../assets/1.jpg";
import styles from "../css/layout.module.css";

const MenuSpesial = () => {
  return (
    <>
      <div
        className="row justify-content-center"
        style={{ width: "100%", marginLeft: "0" }}
      >
        <div className={`col-12 ${styles.menuSpesial}`}>
          <h3>Menu Spesial</h3>
        </div>

        {/* <div className="card" style={{ width: "18rem" }}>
      <Image
        src={tempe}
        height={250}
        width={250}
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div> */}

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
            height={250}
            width={250}
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
            height={250}
            width={250}
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
              Tempe mendoan lemes ukuran A4 dengan bumbu spesial, terus digoreng
              dadakan
            </p>
            <div className={styles.button}>
              <a href="#" className="btn btn-warning">
                Pesan
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSpesial;
