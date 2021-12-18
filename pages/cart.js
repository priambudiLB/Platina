/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import Head from 'next/head';
import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';
import CartMenu from '../components/CartMenu';
import { getData, postData } from '../utils/fetchData';
// import PaypalBtn from "./paypalBtn";

import styles from '../css/cart.module.css';
// import { addToCart } from "../store/Actions";

// import Navbar from "../components/Navbar";

const Cart = function (props) {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth, orders } = state;

  const [total, setTotal] = useState(0);

  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  // const [payment, setPayment] = useState(false);

  const [callback, setCallback] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, menu) => prev + menu.price * menu.quantity, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  useEffect(() => {
    const cartLocal = JSON.parse(
      localStorage.getItem('__next__cart01__mendoan'),
    );
    if (cartLocal && cartLocal.length > 0) {
      const newArray = [];
      const updateCart = async () => {
        for (const menu of cartLocal) {
          const res = await getData(`product/${menu._id}`);
          const {
            _id, title, images, price, inStock, sold,
          } = res.menu;
          if (inStock > 0) {
            newArray.push({
              _id,
              title,
              images,
              price,
              inStock,
              sold,
              quantity: menu.quantity > inStock ? 1 : menu.quantity,
            });
          }
        }
        dispatch({ type: 'ADD_CART', payload: newArray });
      };

      updateCart();
    }
  }, [callback]);

  const handlePayment = async () => {
    if (!address || !phoneNumber) {
      return dispatch({
        type: 'NOTIFY',
        payload: { error: 'Lengkapi alamat dan nomor handphone anda!' },
      });
    }
    const newCart = [];
    for (const menu of cart) {
      const res = await getData(`product/${menu._id}`);
      if (res.menu.inStock - menu.quantity >= 0) {
        newCart.push(menu);
      }
    }
    if (newCart.length < cart.length) {
      setCallback(!callback);
      return dispatch({
        type: 'NOTIFY',
        payload: {
          error:
            'Menu sedang kosong atau jumlah yang anda masukkan tidak sesuai.',
        },
      });
    }

    dispatch({
      type: 'NOTIFY',
      payload: { loading: true },
    });
    postData('order', {
      address, phoneNumber, cart, total,
    }, auth.token).then(
      (res) => {
        if (res.err) {
          return dispatch({
            type: 'NOTIFY',
            payload: { error: res.err },
          });
        }

        dispatch({ type: 'ADD_CART', payload: [] });

        const newOrder = {
          ...res.newOrder,
          user: auth.user,
        };

        dispatch({
          type: 'ADD_ORDERS',
          payload: [...orders, newOrder],
        });
        dispatch({
          type: 'NOTIFY',
          payload: { success: res.msg },
        });
        return router.push(`/order/${res.newOrder._id}`);
      },
    );
  };

  if (cart.length === 0) {
    return (
      <>
        <Head>
          <title>Cart</title>
        </Head>
        <div className={styles.cart}>
          <i className="bi bi-cart-x-fill" />
          <p>Tidak ada pesanan</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-8 table-responsive my-5">
            <h3 className="text-capitalize">Pesanan</h3>

            <table className="table my-3">
              <tbody>
                {cart.map((menu) => (
                  <CartMenu
                    key={menu._id}
                    menu={menu}
                    dispatch={dispatch}
                    cart={cart}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-md-4 my-5 text-right">
            <form>
              <h2>Pembayaran</h2>

              <label htmlFor="address">Alamat</label>
              <input
                type="text"
                name="address"
                id="address"
                className="form-control mb-2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label htmlFor="phoneNumber">No Handphone</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="form-control mb-2"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </form>

            <h3>
              Total:
              {' '}
              <span className="text-success">
                {total}
                K
              </span>
            </h3>

            <Link href={auth.user ? '#!' : '/login'}>
              <a
                className="btn btn-info text-uppercase my-2"
                onClick={handlePayment}
              >
                Lanjutkan Pembayaran
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
