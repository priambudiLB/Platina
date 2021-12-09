import Image from "next/image";

import map from "../assets/map.png";
import styles from "../css/layout.module.css";

const Map = () => {
  return (
    <>
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
    </>
  );
};

export default Map;
