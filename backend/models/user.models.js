import mongoose from "mongoose";
import validator from "validator";
//now creating schema for storing data
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 15,
  },
  photo: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  education: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin"],
  },
  token: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", userSchema);
