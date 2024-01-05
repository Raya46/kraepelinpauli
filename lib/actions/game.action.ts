"use server";

import User from "../models/user.model";
import { connectToDB } from "../mongoose";

export async function getGameData(id: string) {
  connectToDB();

  try {
    const latestData = await User.find({ id: id }).sort({ date: 1, time: 1 });

    const jsonData = latestData.map((user) => {
      return JSON.parse(JSON.stringify(user));
    });
    console.log(latestData);
    return jsonData;
  } catch (error: any) {
    throw new Error(`failed to get user :${error.message}`);
  }
}
