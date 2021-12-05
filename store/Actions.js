export const ACTIONS = {
  NOTIFY: "NOTIFY",
  AUTH: "AUTH",
  ADD_CART: "ADD_CART",
};

export const addToCart = (menu, cart) => {
  if (menu.inStock === 0) return { type: "NOTIFY", payload: { error: "Stoknya habis nih." } };

  const check = cart.every((item) => {
    return item._id !== menu._id;
  });

  if (!check) return { type: "NOTIFY", payload: { error: "Gorengannya udah dikeranjang belanja." } };

  return { type: "ADD_CART", payload: [...cart, { ...menu, quantity: 1 }] };
};
