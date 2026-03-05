import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

const createTokenAndSaveCookies = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, //protect against xss attack
    secure: false,
    sameSite: "lax", // protect against csrf attack
    path : "/",
  });
  await User.findByIdAndUpdate(userId, { token });
  return token;
};

export default createTokenAndSaveCookies;
