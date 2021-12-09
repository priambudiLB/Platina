import styles from "../css/back.module.css";

const BackButton = () => {
  return (
    <>
      <button type="button" className={`btn ${styles.back}`}>
        <i className="bi bi-arrow-left-circle"></i>
      </button>
    </>
  );
};

export default BackButton;
