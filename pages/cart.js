import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import CartItem from "../components/CartItem";
import Link from "next/link";
import { getData } from "../utils/fetchData";
import PaypalBtn from "./paypalBtn";

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [payment, setPayment] = useState(false);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(res);
    };

    getTotal();
  }, [cart]);

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem("__mendoan__cart"));
    if (cartLocal && cartLocal.length > 0) {
      let newArr = [];
      const updateCart = async () => {
        for (const item of cartLocal) {
          const res = await getData("menu/${item._id}");
          const { _id, title, images, price, inStock, sold } = res.menu;
          if (inStock > 0) {
            newArr.push({
              _id,
              title,
              images,
              price,
              inStock,
              sold,
              quantity: item.quantity > inStock ? 1 : item.quantity,
            });
          }
        }

        dispatch({ type: "ADD_CART", payload: newArr });
      };

      updateCart();
    }
  }, [dispatch]);

  const handlePayment = () => {
    if (!address || !mobile) return dispatch({ type: "NOTIFY", payload: { error: "Mohon masukkan alamat dan nomor telephone anda." } });
    setPayment(true);
  };

  if (cart.length === 0)
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img className="img-responsive w-90" src="/empty_bag.jpg" alt="kosong" />
      // <div className="justify-content-center" style={{ width: "100%" }}>
      //   <i className="bi bi-cart-x-fill"></i>
      // </div>
    );
  return (
    <div className="row mx-auto">
      <Head>
        <title>Keranjang</title>
      </Head>
      <div className="col-md-8 text-secondary table-responsive my-3">
        <h2 className="text-uppercase">Keranjang Belanja</h2>
        <table className="table my-3">
          <tbody>
            {cart.map((item) => (
              <CartItem key={item._id} item={item} dispatch={dispatch} cart={cart} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="col-md-4 my-3 text-right text-uppercase text-secondary">
        <form>
          <h2>Pengiriman</h2>
          <label htmlFor="address">Alamat</label>
          <input type="text" name="address" id="address" className="form-control mb-2" value={address} onChange={(e) => setAddress(e.target.value)} />

          <label htmlFor="mobile">Nomor Hp</label>
          <input type="text" name="mobile" id="mobile" className="form-control mb-2" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </form>
        <h3>
          Total: <span className="text-danger">${total}</span>
        </h3>

        {payment ? (
          <PaypalBtn total={total} address={address} mobile={mobile} state={state} dispatch={dispatch} />
        ) : (
          <Link href={auth.user ? "#!" : "/signin"}>
            <a className="btn btn-dark my-2" onClick={handlePayment}>
              Lanjut ke pembayaran
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
