import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  username: String,
  correct: Number,
  wrong: Number,
  totalPlayed: Number,
  testCompleted: Number,
  accumulationTime: Number,
  panker: Number,
  tinker: Number,
  janker: Number,
  hanker: Number,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
