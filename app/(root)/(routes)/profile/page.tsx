"use client";

import AccountProfile from "@/components/accountProfile/page";
import ChartLine from "@/components/chart-c";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProfilePage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <AccountProfile />
      <Card>
        <div className="flex flex-col h-full w-full p-20">
          <ChartLine />
        </div>
      </Card>
      <div className="flex flex-row w-full justify-between gap-4">
        <Card className="p-6 w-full">
          <div className="flex flex-row gap-4 justify-center">
            <div className="flex flex-col gap-4 items-center">
              <CardDescription>Kecepatan Kerja</CardDescription>
              <CardTitle>60.0</CardTitle>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <CardDescription>Ketelitian Kerja</CardDescription>
              <CardTitle>95.0</CardTitle>
            </div>
          </div>
        </Card>
        <Card className="p-6 w-full">
          <div className="flex flex-row gap-4 justify-center ">
            <div className="flex flex-col gap-4 items-center">
              <CardDescription>Total Benar</CardDescription>
              <CardTitle>100</CardTitle>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <CardDescription>Total Salah</CardDescription>
              <CardTitle>9</CardTitle>
            </div>
          </div>
        </Card>
        <Card className="p-6 w-full">
          <div className="flex flex-row gap-4 justify-center ">
            <div className="flex flex-col gap-4 items-center">
              <CardDescription>Kecepatan Kerja</CardDescription>
              <CardTitle>60.0</CardTitle>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <CardDescription>Ketelitian Kerja</CardDescription>
              <CardTitle>95.0</CardTitle>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
