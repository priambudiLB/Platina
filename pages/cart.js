import Head from "next/head";
import { useContext } from "react";
import { DataContext } from "../store/GlobalState";

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  if (cart.length === 0) return <img className="img-responsive w-100" src="../assets/empty_bag.jpg" alt="kosong" />;
  return (
    <div>
      <Head>
        <title>Keranjang</title>
      </Head>
      <h1>Keranjang</h1>
    </div>
  );
};

export default Cart;
