import styles from "../css/loading.module.css";

const Loading = () => {
  return (
    <div
      className={`position-fixed w-100 h-100 text-center ${styles.loading}`}
      style={{
        background: "#0009",
        color: "white",
        top: "0",
        left: "0",
        zIndex: "9",
      }}
    >
      <div className={styles.configure}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <p>Loading...</p>
      </div>
      {/* <div className="spinner-box">
        <div className={styles.border1}>
          <div className={styles.bg}></div>
        </div>
        <div className={styles.border2}>
          <div className={styles.bg}></div>
        </div>
      </div> */}
    </div>
  );
};

export default Loading;
