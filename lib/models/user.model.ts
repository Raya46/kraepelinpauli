import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true },
  correct: { type: String, required: true },
  wrong: { type: String, required: true },
  totalPlayed: { type: String, required: true },
  accumulationTime: { type: String, required: true },
  panker: { type: String, required: true },
  tinker: { type: String, required: true },
  janker: { type: String, required: true },
  hanker: { type: String, required: true },
  path: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
