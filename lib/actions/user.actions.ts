"use server";

import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";

export async function updateUser(
  userId: string,
  username: string,
  image: string,
  correct: number,
  wrong: number,
  totalPlayed: number,
  testCompleted: number,
  accumulationTime: number,
  PANKER: number,
  TINKER: number,
  JANKER: number,
  HANKER: number,
  path: string
): Promise<void> {
  connectToDB();

  try {
    await User.findOneAndUpdate(
      { id: userId },
      {
        correct,
        wrong,
        totalPlayed,
        testCompleted,
        accumulationTime,
        PANKER,
        TINKER,
        JANKER,
        HANKER,
      },
      { upsert: true }
    );

    if (path === "/") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`failed to update user :${error.message}`);
  }
}
