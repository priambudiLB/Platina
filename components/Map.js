/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */
import Image from 'next/image';
import map from '../assets/map.png';
import styles from '../css/layout.module.css';

const Map = function () {
  return (
    <div className="row justify-content-center" style={{ width: "100%" }}>
      <div className={`col-10 ${styles.map}`}>
        <div className={styles.imgMap1}>
          {/* <Image src={map} className={styles.imgMap} alt="" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29890.074311836164!2d112.74742760273763!3d-7.19178131167771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f963d2d4fb4d%3A0x30462b46df526821!2sSuramadu%20Bridge!5e0!3m2!1sen!2sid!4v1639141994949!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ borderRadius: 16 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        <div className={`col-8 ${styles.textMap}`}>
          <h3>Cobain sekarang!</h3>
          <h5>Sekarang kamu bisa nge-track pesanan kamu</h5>
          <h6>Disini</h6>
        </div>
      </div>
    </div>
  );
};

export default Map;
