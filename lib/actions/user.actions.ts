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
  correct: string;
  wrong: string;
  panker: string;
  tinker: string;
  janker: string;
  hanker: string;
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
      correct: String(correct),
      wrong: String(wrong),
      panker: String(panker),
      tinker: String(tinker),
      janker: String(janker),
      hanker: String(hanker),
    };

    return extractedData;
  } catch (error) {
    console.error("Error fetching detail data:", error);
    return null;
  }
}

export async function dataForChart(id: string) {
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
        allWrong: 0,
        allCorrect: 0,
        pankerValue: 0,
        tinkerValue: 0,
        jankerValue: 0,
        hankerValue: 0,
      };
    }

    const { correct, wrong, panker, tinker, janker, hanker } = bestUser[0];
    const jsonData = {
      wrong: wrong,
      correct: correct,
      panker: panker,
      tinker: tinker,
      janker: janker,
      hanker: hanker,
    };

    console.log(jsonData);
    return jsonData;
  } catch (error) {
    throw new Error(`Gagal mengambil data: ${error}`);
  }
}
