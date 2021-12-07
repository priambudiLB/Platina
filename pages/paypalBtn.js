import { useEffect, useRef, useContext } from "react";
import { postData } from "../utils/fetchData";

const paypalBtn = ({ total, address, mobile, state, dispatch }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const refPaypalBtn = useRef();
  const { cart, auth } = state;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    paypal
      .Buttons({
        createOrder: function (data, actions) {
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          // This function captures the funds from the transaction.

          dispatch({ type: "NOTIFY", payload: { loading: true } });

          return actions.order.capture().then(function (details) {
            postData("order", { address, mobile, cart, total }, auth.token).then((res) => {
              if (res.err) return dispatch({ type: "NOTIFY", payload: { error: res.err } });

              dispatch({ type: "ADD_CART", payload: [] });
              return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
            });
            // alert("Transaction completed by " + details.payer.name.given_name);
          });
        },
      })
      .render(refPaypalBtn.current);
  }, [address, auth.token, cart, dispatch, mobile, total]);

  return <div ref={refPaypalBtn}></div>;
};

export default paypalBtn;
