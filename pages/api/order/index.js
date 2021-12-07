import connectDB from "../../../utils/connectDB";
import Orders from "../../../models/orderModel";
import Products from "../../../models/productModel";
import auth from "../../../middleware/auth";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await createdOrder(req, res);
      break;
  }
};

const createdOrder = async (req, res) => {
  try {
    const result = await auth(req, res);
    const { address, mobile, cart, total } = req.body;

    const newOrder = new Orders({
      user: result.id,
      address,
      mobile,
      cart,
      total,
    });

    console.log(cart);
    cart.filter((item) => {
      return sold(item._id, item.quantity, item.inStock, item.sold);
    });

    await newOrder.save();

    res.json({
      msg: "Pembayaran berhasil",
      newOrder,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const sold = async (id, quantity, oldInStock, oldSold) => {
  await Products.findOneAndUpdate(
    { _id: id },
    {
      inStock: oldInStock - quantity,
      sold: quantity + oldSold,
    }
  );
};
