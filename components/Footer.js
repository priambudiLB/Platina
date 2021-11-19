import styles from "../css/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={`container ${styles.contact}`}>
          <p>Menu</p>
          <p>Offers</p>
          <p>Delivery</p>
          <h3>MENDOAN.ID</h3>
          <p>Events</p>
          <p>Contact</p>
          <p>About</p>
        </div>
        <div className={`container ${styles.sosmed}`}>
          <div className="row">
            <div className="col-4">
              <div className={styles.wa}>
                <i className="bi bi-whatsapp"></i>
                <p>+6211111111</p>
              </div>
              <div className={styles.ig}>
                <i className="bi bi-instagram"></i>
                <p>mendoan_id</p>
              </div>
              <div className={styles.fb}>
                <i className="bi bi-facebook"></i>
                <p>mendoan_id</p>
              </div>
            </div>

            <div className={`col-8 ${styles.alamat}`}>
              <h5>Mendoan Indonesia</h5>
              <p>Jl. Satu untuk sendiri, No.1</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; 2021 Mendoan Indonesia</p>
          <p>Privacy-Terms</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
