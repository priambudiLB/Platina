/* eslint-disable consistent-return */
/* eslint-disable default-case */
import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import auth from '../../../middleware/auth';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'PATCH':
      await uploadInfo(req, res);
      break;
  }
};

const uploadInfo = async (req, res) => {
  try {
    const result = await auth(req, res);
    const { username, avatar } = req.body;

    const newUser = await Users.findOneAndUpdate(
      { _id: result.id },
      { username, avatar },
    );

    res.json({
      msg: 'Update berhasil.',
      user: {
        username,
        avatar,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
