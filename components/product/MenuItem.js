/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";

import styles from "../../css/menu.module.css";

const MenuItem = function ({ menu }) {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  const userLink = () => (
    <>
      <Link href={`/menu/${menu._id}`}>
        <a className="btn btn-info" style={{ marginRight: "5px", flex: 1 }}>
          Lihat
        </a>
      </Link>
      <button
        className="btn btn-warning"
        style={{ marginLeft: "5px", flex: 1 }}
        disabled={menu.inStock === 0}
        onClick={() => dispatch(addToCart(menu, cart))}
      >
        Pesan
      </button>
    </>
  );

  return (
    <div className={styles.card}>
      <img
        src={menu.images[0].url}
        className={`card-img-top ${styles.cardImage}`}
        alt={menu.images[0].url}
      />

      <div className={styles.cardBody}>
        {/* <div className={`row justify-content-between mx-0 ${styles.cardTitle}`}> */}

        <h5 className={`card-title text-capitalize `} title={menu.title}>
          {menu.title}
        </h5>

        <div
          className="row justify-content-between mx-0"
          style={{ alignItems: "flex-end" }}
        >
          {/* STOCK MENU */}
          {menu.inStock > 0 ? (
            <h6>
              {' '}
              Stock Menu:
              {' '}
              {menu.inStock}
              {' '}
            </h6>
          ) : (
            <h6 className="text-danger"> Habis </h6>
          )}

          {/* PRICE */}
          <h6 className={styles.price}>
            {menu.price}
            K
            {' '}
            <span>
              {menu.pcs}
              pcs
            </span>
          </h6>
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
