import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  admin: { type: Boolean, required: true, default: false },
});

const User = mongoose.model("User", userSchema);
export default User;
