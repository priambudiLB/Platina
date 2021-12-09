import Link from "next/link";
import { decrease, increase } from "../store/Actions";

import styles from "../css/cart.module.css";

const CartMenu = ({ menu, dispatch, cart }) => {
  return (
    <tr>
      <td style={{ width: "100px", overflow: "hidden" }}>
        <img
          src={menu.images[0].url}
          alt={menu.images[0].url}
          className="img-thumbnail w-100"
          style={{ minWidth: "80px", height: "80px" }}
        />
      </td>

      <td style={{ width: "200px" }} className=" align-middle">
        <h5 className="text-capitalize">
          <Link href={`/menu/${menu._id}`}>
            <a style={{ textDecoration: "none" }}>{menu.title}</a>
          </Link>
          <style>{`
              a:hover {
                color: #666666;
              }
            `}</style>
        </h5>

        {/* STOCK IN CART */}
        {menu.inStock > 0 ? (
          <p className="mb-1">In Stock: {menu.inStock}</p>
        ) : (
          <p>Out Stock</p>
        )}
      </td>

      <td className="align-middle" style={{ width: "200px" }}>
        <button
          className={`btn ${styles.button}`}
          onClick={() => dispatch(decrease(cart, menu._id))}
          disabled={menu.quantity === 1 ? true : false}
        >
          <i
            className="bi bi-dash-circle-fill"
            style={{ fontSize: "25px" }}
          ></i>
        </button>
        <span className="px-3" style={{ fontSize: "20px" }}>
          {menu.quantity}
        </span>
        <button
          className={`btn ${styles.button}`}
          onClick={() => dispatch(increase(cart, menu._id))}
          disabled={menu.quantity === menu.inStock ? true : false}
        >
          <i
            className="bi bi-plus-circle-fill"
            style={{ fontSize: "25px" }}
          ></i>
        </button>
      </td>

      <td
        className="align-middle"
        style={{ minWidth: "50px", cursor: "pointer" }}
      >
        <i
          className="bi bi-trash text-danger"
          aria-hidden="true"
          style={{ fontSize: "25px" }}
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={() =>
            dispatch({
              type: "ADD_MODAL",
              payload: { data: cart, id: menu._id, title: menu.title },
            })
          }
        ></i>
      </td>

      <td className="align-middle" style={{ textAlign: "center" }}>
        <h6 style={{ fontSize: "22px", marginTop: "10px" }}>
          {menu.quantity * menu.price}K
        </h6>
      </td>
    </tr>
  );
};

export default CartMenu;
