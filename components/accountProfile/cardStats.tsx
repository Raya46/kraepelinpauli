"use client";

import { Card } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";

interface Props {
  userDataStats: {
    
    id: string;
    objectId: string;
    totalPlayed: number;
    accumulationTime: number;
    correct: number;
    wrong: string;
    panker: string;
    tinker: string;
    janker: string;
    hanker: string;
  };
}

const CardStats = ({ userDataStats }: Props) => {
  return (
    <div className="flex w-full gap-6">
      <div className="flex w-full flex-col gap-6">
        <Card className="p-6 w-full">
          <div className="flex gap-4 justify-center">
            <div className="flex flex-col gap-4 items-center">
              <CardDescription>Kecepatan Kerja</CardDescription>
              <CardTitle>{userDataStats?.panker}</CardTitle>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <CardDescription>Ketelitian Kerja</CardDescription>
              <CardTitle>{userDataStats?.tinker}</CardTitle>
            </div>
          </div>
        </Card>
        <Card className="p-6 w-full">
          <div className="flex gap-4 justify-center ">
            <div className="flex flex-col gap-4 items-center">
              <CardDescription>Keajegan Kerja</CardDescription>
              <CardTitle>{userDataStats?.janker}</CardTitle>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <CardDescription>Ketelitian Kerja</CardDescription>
              <CardTitle>{userDataStats?.hanker}</CardTitle>
            </div>
          </div>
        </Card>
        <Card className="p-6 w-full">
          <div className="flex gap-4 justify-center">
            <div className="flex flex-col gap-4 items-center">
              <CardDescription>Total Benar</CardDescription>
              <CardTitle>{userDataStats?.correct}</CardTitle>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <CardDescription>Total Salah</CardDescription>
              <CardTitle>{userDataStats?.wrong}</CardTitle>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardStats;
