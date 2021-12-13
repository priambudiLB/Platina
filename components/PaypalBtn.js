/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable func-names */
import { useEffect, useRef, useContext } from 'react';
import { patchData } from '../utils/fetchData';
import { DataContext } from '../store/GlobalState';
import { updateMenu } from '../store/Actions';

const PaypalBtn = function ({ order }) {
  const refPaypalBtn = useRef();
  const { state, dispatch } = useContext(DataContext);
  const { auth, orders } = state;

  useEffect(() => {
    paypal
      .Buttons({
        style: {
          shape: 'rect',
          color: 'silver',
          layout: 'vertical',
          label: 'paypal',
        },
        createOrder(data, actions) {
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: order.total,
                },
              },
            ],
          });
        },
        onApprove(data, actions) {
          // This function captures the funds from the transaction.
          return actions.order.capture().then((details) => {
            dispatch({
              type: 'NOTIFY',
              payload: { loading: true },
            });
            patchData(`order/${order._id}`, null, auth.token).then((res) => {
              if (res.err) {
                return dispatch({
                  type: 'NOTIFY',
                  payload: { error: res.err },
                });
              }

              dispatch(
                updateMenu(
                  orders,
                  order._id,
                  {
                    ...order,
                    paid: true,
                    dateOfPayment: new Date().toISOString(),
                  },
                  'ADD_ORDERS',
                ),
              );

              return dispatch({
                type: 'NOTIFY',
                payload: { success: res.msg },
              });
            });

            // This function shows a transaction success message to your buyer.
            // alert("Transaction completed by " + details.payer.name.given_name);
          });
        },
      })
      .render(refPaypalBtn.current);
  }, []);

  return <div ref={refPaypalBtn} />;
};

export default PaypalBtn;
