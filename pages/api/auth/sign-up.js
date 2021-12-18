/* eslint-disable consistent-return */
/* eslint-disable default-case */
import bcrypt from 'bcrypt';
import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import valid from '../../../utils/valid';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const {
      username, email, password, confirmPassword,
    } = req.body;

    const errMsg = valid(username, email, password, confirmPassword);
    if (errMsg) return res.status(400).json({ err: errMsg });

    const user = await Users.findOne({ email });
    if (user) return res.status(400).json({ err: 'This email already exists' });

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new Users({
      username,
      email,
      password: passwordHash,
      confirmPassword,
    });

    await newUser.save();
    res.json({ msg: 'Registrasi berhasil! lakukan login.' });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
