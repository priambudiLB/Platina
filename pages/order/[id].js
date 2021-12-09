import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";
import { useRouter } from "next/router";
import Link from "next/link";
import OrderDetail from "../../components/OrderDetail";

import BackButton from "../../components/BackButton";

const DetailOrder = () => {
  const { state, dispatch } = useContext(DataContext);
  const { orders, auth } = state;

  const router = useRouter();

  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    const newArray = orders.filter((order) => order._id === router.query.id);
    setOrderDetail(newArray);
  }, [orders]);

  return (
    <>
      <div className="container">
        <Head>
          <title>Detail Order</title>
        </Head>

        <Link href="/orders">
          <a>
            <BackButton />
          </a>
        </Link>

        <OrderDetail orderDetail={orderDetail} />
      </div>
    </>
  );
};

export default DetailOrder;
