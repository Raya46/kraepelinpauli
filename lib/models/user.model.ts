import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {type: String, required: true},
    username: {type: String, required: true},
    image: String,
    correct: Number,
    wrong: Number,
    totalPlayed: Number,
    PANKER: Number,
    TINKER: Number,
    JANKER: Number,
    HANKER: Number
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User