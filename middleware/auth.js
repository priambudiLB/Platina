import jwt from "jsonwebtoken";
import Users from "../models/userModel";

const auth = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(400).json({ err: "Invalid Authentication" });

  const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  if (!decode) return res.status(400).json({ err: "Invalid Authentication" });

  const user = await Users.findOne({ _id: decode.id });

  return { id: user._id };
};

export default auth;
