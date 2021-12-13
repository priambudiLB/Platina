/* eslint-disable consistent-return */
/* eslint-disable default-case */
import bcrypt from 'bcrypt';
import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import auth from '../../../middleware/auth';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'PATCH':
      await resetPassword(req, res);
      break;
  }
};

const resetPassword = async (req, res) => {
  try {
    const result = await auth(req, res);
    const { password } = req.body;
    const passwordHash = await bcrypt.hash(password, 12);

    await Users.findOneAndUpdate(
      { _id: result.id },
      { password: passwordHash },
    );

    res.json({ msg: 'Update berhasil.' });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
