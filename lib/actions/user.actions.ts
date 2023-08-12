"use server";

import User from "../models/user.model";
import { connectToDB } from "../mongoose";

export async function updateUser(
  userId: string,
  username: string,
  image: string,
  correct: number,
  wrong: number,
  totalPlayed: number,
  PANKER: number,
  TINKER: number,
  JANKER: number,
  HANKER: number
): Promise<void> {
  connectToDB();

  await User.findOneAndUpdate(
    { id: userId },
    {
      username: username,
      image,
      correct,
      wrong,
      totalPlayed,
      PANKER,
      TINKER,
      JANKER,
      HANKER,
    },
    { upsert: true }
  );
}
