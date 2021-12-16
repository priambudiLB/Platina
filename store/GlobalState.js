/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-var */
/* eslint-disable import/no-mutable-exports */
import { createContext, useReducer, useEffect } from "react";
import reducers from "./Reducers";
import { getData } from "../utils/fetchData";

export const DataContext = createContext();

export var DataProvider = function ({ children }) {
  const initialState = {
    notify: {},
    auth: {},
    cart: [],
    modal: {},
    orders: [],
  };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { cart, auth } = state;

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      // eslint-disable-next-line consistent-return
      getData("auth/accessToken").then((res) => {
        if (res.err) return localStorage.removeItem("firstLogin");

        dispatch({
          type: "AUTH",
          payload: {
            token: res.access_token,
            user: res.user,
          },
        });
      });
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    const __next__cart01__mendoan = JSON.parse(
      localStorage.getItem("__next__cart01__mendoan"),
    );

    if (__next__cart01__mendoan) { dispatch({ type: "ADD_CART", payload: __next__cart01__mendoan }); }
  }, []);

  useEffect(() => {
    localStorage.setItem("__next__cart01__mendoan", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (auth.token) {
      getData("order", auth.token).then((res) => {
        if (res.err) { return dispatch({ type: "NOTIFY", payload: { error: res.msg } }); }

        dispatch({ type: "ADD_ORDERS", payload: res.orders });
      });
    }
  }, [auth.token]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    // eslint-disable-next-line react/jsx-filename-extension
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
