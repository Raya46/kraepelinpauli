"use client";

import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";

const CardBestData = ({ user }: { user: any }) => {
  return (
    <div className="flex flex-col gap-2">
      <Card className="w-full p-4">
        <div className="flex flex-row gap-2">
          <CardDescription>total benar:</CardDescription>
          <CardTitle>{user?.correct}</CardTitle>
        </div>
      </Card>
      <Card className="w-full p-4">
        <div className="flex flex-row gap-2">
          <CardDescription>total salah:</CardDescription>
          <CardTitle>{user?.wrong}</CardTitle>
        </div>
      </Card>
      <Card className="w-full p-4">
        <div className="flex flex-row gap-2">
          <CardDescription>Kecepatan Kerja (PANKER):</CardDescription>
          <CardTitle>{user?.panker}</CardTitle>
        </div>
      </Card>
      <Card className="w-full p-4">
        <div className="flex flex-row gap-2">
          <CardDescription>Ketelitian Kerja (TINKER):</CardDescription>
          <CardTitle>{user?.tinker}</CardTitle>
        </div>
      </Card>
      <Card className="w-full p-4">
        <div className="flex flex-row gap-2">
          <CardDescription>Keajegan Kerja (JANKER):</CardDescription>
          <CardTitle>{user?.janker}</CardTitle>
        </div>
      </Card>
      <Card className="w-full p-4">
        <div className="flex flex-row gap-2">
          <CardDescription>Ketahanan Kerja (HANKER):</CardDescription>
          <CardTitle>{user?.hanker}</CardTitle>
        </div>
      </Card>
    </div>
  );
};

export default CardBestData;
