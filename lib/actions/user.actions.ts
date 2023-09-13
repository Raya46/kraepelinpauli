"use server";

import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";

interface Params {
  id: string;
  username: string;
  correct: number;
  wrong: number;
  totalPlayed: number;
  accumulationTime: number;
  panker: string;
  tinker: string;
  janker: string;
  hanker: string;
  path: string;
  date: string;
  time: string;
}

export async function updateUser({
  id,
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
  date,
  time,
}: Params): Promise<void> {
  connectToDB();

  try {
    await User.create({
      id,
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
      date,
      time,
    });
    console.log("success user data");
    if (path === "/") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`failed to update user :${error.message}`);
  }
}

export async function getBestUserData(id: string) {
  connectToDB();
  try {
    const bestUser = await User.find({ id: id })
      .sort({
        correct: -1,
        wrong: 1,
        panker: -1,
        janker: -1,
        hanker: -1,
        tinker: -1,
      })
      .limit(1);
    const jsonData = bestUser.map((user) => {
      return JSON.parse(JSON.stringify(user));
    });
    return jsonData[0];
  } catch (error) {
    throw new Error(`Gagal mengambil data: ${error}`);
  }
}
