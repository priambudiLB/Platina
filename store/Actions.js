/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
export const ACTIONS = {
  NOTIFY: "NOTIFY",
  AUTH: "AUTH",
  ADD_CART: "ADD_CART",
  ADD_MODAL: "ADD_MODAL",
  ADD_ORDERS: "ADD_ORDERS",
};

export const addToCart = (menu, cart) => {
  if (menu.inStock === 0) { return { type: "NOTIFY", payload: { error: "Menu sedang kosong" } }; }

  const check = cart.every((item) => {
    return item._id !== menu._id;
  });

  if (!check) {
    return {
      type: "NOTIFY",
      payload: { error: "Menu sudah ditambahkan" },
    };
  }
  return {
    type: "ADD_CART",
    payload: [...cart, { ...menu, quantity: 1 }],
  };
};

export const decrease = (data, id) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item._id === id) item.quantity -= 1;
  });
  return { type: "ADD_CART", payload: newData };
};

export const increase = (data, id) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item._id === id) item.quantity += 1;
  });
  return { type: 'ADD_CART', payload: newData };
};

export const deleteMenu = (data, id, type) => {
  const newData = data.filter((menu) => menu._id !== id);
  return { type, payload: newData };
};

export const updateMenu = (data, id, post, type) => {
  const newData = data.map((menu) => (menu._id === id ? post : menu));
  return { type, payload: newData };
};
