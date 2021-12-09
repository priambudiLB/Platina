import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import Link from "next/link";
// import valid from "../utils/valid";
// import { patchData } from "../utils/fetchData";

const Orders = () => {
  // const initialState = {
  //   avatar: "",
  //   username: "",
  //   password: "",
  //   confirm_password: "",
  // };
  // const [data, setData] = useState(initialState);
  // const { avatar, username, password, confirm_password } = data;

  const { state } = useContext(DataContext);
  const { auth, orders } = state;

  // useEffect(() => {
  //   if (auth.user) setData({ ...data, username: auth.user.username });
  // }, [auth.user]);

  if (!auth.user) return null;
  return (
    <>
      <div className="container mt-3">
        <Head>
          <title>Order Page</title>
        </Head>

        <div className="order text-center mt-3">
          <h3 className="tex-uppercase mt-3">Orders</h3>
          <div className="my-3 table-responsive">
            <table
              className="table-bordered table-hover w-100 text-uppercase"
              style={{ minWidt: "600px", cursor: "pointer" }}
            >
              <thead className="bg-light font-weight-bold">
                <tr>
                  <td className="p-2">id</td>
                  <td className="p-2">date</td>
                  <td className="p-2">total</td>
                  <td className="p-2">delivered</td>
                  <td className="p-2">paid</td>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td className="p-2">
                      <Link href={`/order/${order._id}`}>
                        <a style={{ textDecoration: "none" }}>{order._id}</a>
                      </Link>
                    </td>
                    <td className="p-2">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-2">{order.total}K</td>
                    <td className="p-2">
                      {order.delivered ? (
                        <i className="bi bi-check-lg text-success "></i>
                      ) : (
                        <i className="bi bi-x-lg text-danger "></i>
                      )}
                    </td>

                    <td className="p-2">
                      {order.paid ? (
                        <i className="bi bi-check-lg text-success "></i>
                      ) : (
                        <i className="bi bi-x-lg text-danger "></i>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
