/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */
import Link from "next/link";
import PaypalBtn from "./PaypalBtn";

import styles from "../css/order.module.css";

const OrderDetail = function ({ orderDetail }) {
  return (
    <>
      {orderDetail.map((order) => (
        <div
          key={order._id}
          className="row justify-content-around"
          style={{
            maxWidth: "900px",
            margin: "5px  auto 50px",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 0px 10px rgb(150, 150, 150) inset",
          }}
        >
          <div className={styles.orderId} style={{ width: "550px" }}>
            <h4 className="text-break">Nomor Order</h4>
            <h4>{order._id}</h4>

            <div className={`mt-4 ${styles.orderDetail}`}>
              <h5>Pesanan</h5>
              <p>
                Nama:
                {' '}
                {order.user.username}
              </p>
              <p>
                Email:
                {' '}
                {order.user.email}
              </p>
              <p>
                Alamat:
                {' '}
                {order.address}
              </p>
              <p>
                No Handphone:
                {' '}
                {order.phoneNumber}
              </p>

              <div
                className={`alert ${
                  order.delivered ? "alert-success" : "alert-danger"
                } d-flex justify-content-between align-items-center`}
                role="alert"
              >
                {order.delivered
                  ? `Delivered on ${order.updateAt}`
                  : "Not Delivered"}
              </div>

              <h5>Pembayaran</h5>
              <div
                className={`alert ${
                  order.paid ? "alert-success" : "alert-danger"
                } d-flex justify-content-between align-items-center`}
                role="alert"
              >
                {order.paid
                  ? `Paid on ${new Date(order.dateOfPayment).toLocaleString()}`
                  : "Not Paid"}
              </div>

              <div>
                <h5>Order Menu</h5>
                {order.cart.map((item) => (
                  <div
                    className={`row mx-0 p-2 align-items-center ${styles.orderMenu}`}
                    key={item._id}
                    style={{ maxWidth: "550px" }}
                  >
                    <img
                      src={item.images[0].url}
                      alt={item.images[0].url}
                      style={{
                        width: "50px",
                        height: "45px",
                        objectFit: "cover",
                      }}
                    />

                    <h6 className="flex-fill m-0">
                      <Link href={`/menu/${item._id}`}>
                        <a style={{ textDecoration: "none" }}>{item.title}</a>
                      </Link>
                    </h6>

                    <span className="font-weight-bold" style={{ marginRight: "-5px" }}>
                      {item.quantity}
                      {' '}
                      x
                      {' '}
                      {item.price}
                      K =
                      {' '}
                      {item.price * item.quantity}
                      K
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {!order.paid && (
            <div className="px-3 py-5">
              <h4 className="mb-4 text-center">
                Total :
                {' '}
                {order.total}
                K
              </h4>
              <PaypalBtn order={order} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default OrderDetail;
