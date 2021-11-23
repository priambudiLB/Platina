import Head from "next/head";
// import { useContext, useState, useEffect } from "react";
// import { DataContext } from "../store/GlobalState";
// import CartItem from "../components/CartItem";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="row mx-auto">
      <Head>
        <title>Cart Page</title>
      </Head>
      <div className="row justify-content-center">
        <div className="col-md-6 text-secondary table-responsive my-3">
          <h2 className="text-uppercase">Keranjang Belanja</h2>

          <table className="table my-3">
            <tbody>
              <h2>Gorengan</h2>
              {/* {cart.map((item) => (
              <CartItem key={item._id} item={item} dispatch={dispatch} cart={cart} />
            ))} */}
            </tbody>
          </table>
        </div>

        <div className="col-md-4 my-3 text-right text-uppercase text-secondary">
          <form>
            <h2>Pengiriman</h2>

            <label htmlFor="address">Alamat</label>
            <input type="text" name="address" id="address" className="form-control mb-2" />

            <label htmlFor="mobile">Nomor HP</label>
            <input type="text" name="mobile" id="mobile" className="form-control mb-2" />
          </form>

          <h3>
            Total: <span className="text-danger">IDR120k</span>
          </h3>

          <Link href="/signin">
            <a className="btn btn-warning my-2">Lanjut ke pembayaran</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
