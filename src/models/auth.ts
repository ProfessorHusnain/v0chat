import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "please write your name"],
  },
  email: {
    type: String,
    required: [true, "please provide valid email"],
    unique: true,
  },
  password: {
    type: String,
    //required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
