/* eslint-disable consistent-return */
/* eslint-disable default-case */
import connectDB from '../../../utils/connectDB';
import Products from '../../../models/productModel';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getProducts(req, res);
      break;
  }
};

const getProducts = async (req, res) => {
  try {
    const menu = await Products.find();

    res.json({
      status: 'success',
      result: menu.length,
      menu,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
