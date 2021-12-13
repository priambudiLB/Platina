/* eslint-disable consistent-return */
/* eslint-disable default-case */
import connectDB from '../../../utils/connectDB';
import Products from '../../../models/productModel';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getProduct(req, res);
      break;
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.query;

    const menu = await Products.findById(id);
    if (!menu) return res.status(400).json({ err: 'Menu not found.' });

    res.json({ menu });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
