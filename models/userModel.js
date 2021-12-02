import mongoose from "mongoose";
import profile from "../assets/img_568656.png";

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
        "https://res.cloudinary.com/dxzst64gw/image/upload/v1638020966/img_568656_lgfczb.png",
    },
  },
  {
    timestamps: true,
  }
);

let Dataset = mongoose.models.user || mongoose.model("user", userSchema);
export default Dataset;
