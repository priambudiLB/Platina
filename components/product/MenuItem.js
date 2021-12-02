import Link from "next/link";
import styles from "../../css/menu.module.css";

const MenuItem = ({ menu }) => {
  const userLink = () => {
    return (
      <>
        <Link href={`menu/${menu._id}`}>
          <a className="btn btn-info" style={{ marginRight: "5px", flex: 1 }}>
            Lihat
          </a>
        </Link>
        <button
          className="btn btn-warning"
          style={{ marginLeft: "5px", flex: 1 }}
        >
          Pesan
        </button>
      </>
    );
  };

  return (
    <div className={styles.card}>
      <img
        src={menu.images[0].url}
        className={`card-img-top ${styles.cardImage}`}
        alt={menu.images[0].url}
      />

      <div className={styles.cardBody}>
        {/* <h5
          className={`card-title text-capitalize ${styles.cardTitle}`}
          title={menu.title}
        >
          {menu.title}
        </h5> */}

        <div className={`row justify-content-between mx-0 ${styles.cardTitle}`}>
          <h5 className={`card-title text-capitalize `} title={menu.title}>
            {menu.title}
          </h5>
          {/* PRICE */}
          <h6 className={`text-danger ${styles.price}`}>
            {menu.price}K <span>{menu.pcs}pcs</span>
          </h6>

          {/* STOCK MENU */}
          {/* {menu.inStock > 0 ? (
            <h6 className="text-danger"> In Stock: {menu.inStock} </h6>
          ) : (
            <h6 className="text-danger"> Out Stock </h6>
          )} */}
        </div>
        <p className={styles.cardText} title={menu.description}>
          {menu.description}
        </p>

        <div className="row justify-content-between mx-0">{userLink()}</div>
      </div>
    </div>
  );
};

export default MenuItem;
