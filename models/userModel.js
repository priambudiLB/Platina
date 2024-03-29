/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    root: {
      type: Boolean,
      default: false,
    },

    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/mendoanindonesia/image/upload/v1638602986/avatar_d6aglv.png",
    },
  },
  {
    timestamps: true,
  },
);

let Dataset = mongoose.models.user || mongoose.model("user", userSchema);
export default Dataset;
