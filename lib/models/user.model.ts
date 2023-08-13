import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  correct: Number,
  wrong: Number,
  totalPlayed: Number,
  PANKER: Number,
  TINKER: Number,
  JANKER: Number,
  HANKER: Number,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
