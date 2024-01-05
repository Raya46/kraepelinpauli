"use server";

import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";

interface Params {
  id: string | undefined;
  gameId: number;
  username: string | null | undefined;
  correct: number;
  wrong: number;
  panker: number;
  tinker: number;
  janker: number;
  hanker: number;
  path: string;
  date: string;
  time: string;
}

export async function updateUser({
  id,
  gameId,
  username,
  correct,
  wrong,
  panker,
  tinker,
  janker,
  hanker,
  path,
  date,
  time,
}: Params): Promise<void> {
  connectToDB();
  const latestUser = await User.findOne({}, { gameId: 1 }).sort({ gameId: -1 });
  const newGameId = latestUser ? latestUser.gameId + 1 : 1;

  try {
    await User.create({
      id,
      gameId: newGameId,
      username,
      correct,
      wrong,
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
    console.log(bestUser);
    const jsonData = bestUser.map((user) => {
      return JSON.parse(JSON.stringify(user));
    });
    return jsonData[0];
  } catch (error) {
    throw new Error(`Gagal mengambil data: ${error}`);
  }
}

export async function getDetailData(gameId: number) {
  connectToDB();
  try {
    const detailUser = await User.findOne({ gameId: gameId });
    return JSON.parse(JSON.stringify(detailUser));
  } catch (error) {
    console.log(error);
  }
}

interface DetailData {
  correct: number;
  wrong: number;
  panker: number;
  tinker: number;
  janker: number;
  hanker: number;
}

export async function dataForChartDetail(
  gameId: number
): Promise<DetailData | null> {
  connectToDB();
  try {
    const detailUser = await User.findOne({ gameId: gameId });

    if (!detailUser) {
      // Handle the case where no user is found
      return null;
    }

    const { correct, wrong, panker, tinker, janker, hanker } = detailUser;
    const extractedData: DetailData = {
      correct: Number(correct),
      wrong: Number(wrong),
      panker: Number(panker),
      tinker: Number(tinker),
      janker: Number(janker),
      hanker: Number(hanker),
    };

    return extractedData;
  } catch (error) {
    console.error("Error fetching detail data:", error);
    return null;
  }
}

export async function dataForChart(id: string): Promise<DetailData | null> {
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

    if (bestUser.length === 0) {
      return {
        wrong: 0,
        correct: 0,
        panker: 0,
        tinker: 0,
        janker: 0,
        hanker: 0,
      };
    }

    const { correct, wrong, panker, tinker, janker, hanker } = bestUser[0];
    const jsonData: DetailData = {
      wrong: Number(wrong),
      correct: Number(correct),
      panker: Number(panker),
      tinker: Number(tinker),
      janker: Number(janker),
      hanker: Number(hanker),
    };

    console.log(jsonData);
    return jsonData;
  } catch (error) {
    throw new Error(`Gagal mengambil data: ${error}`);
  }
}
