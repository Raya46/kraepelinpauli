import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  gameId: { type: Number, required: true },
  username: { type: String, required: true },
  correct: { type: Number, required: true },
  wrong: { type: Number, required: true },
  panker: { type: Number, required: true },
  tinker: { type: Number, required: true },
  janker: { type: Number, required: true },
  hanker: { type: Number, required: true },
  path: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
