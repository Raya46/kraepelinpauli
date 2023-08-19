"use server";

import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";

interface Params {
  userId: string;
  username: string;
  correct: number;
  wrong: number;
  totalPlayed: number;
  accumulationTime: number;
  panker: number;
  tinker: number;
  janker: number;
  hanker: number;
  path: string;
}

export async function updateUser({
  userId,
  username,
  correct,
  wrong,
  totalPlayed,
  accumulationTime,
  panker,
  tinker,
  janker,
  hanker,
  path,
}: Params): Promise<void> {
  connectToDB();

  try {
    await User.findOneAndUpdate(
      { id: userId },
      {
        username,
        correct,
        wrong,
        totalPlayed,
        accumulationTime,
        panker,
        tinker,
        janker,
        hanker,
        path,
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
