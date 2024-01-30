"use client";

import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";

const CardDetailData = ({ user }: { user: any }) => {
  return (
    <div className="gap-2 flex flex-col lg:flex-row">
      <Card className="w-full p-4">
        <div className="flex gap-2 justify-between">
          <CardDescription>total benar:</CardDescription>
          <CardTitle>{user?.correct}</CardTitle>
        </div>
      </Card>
      <Card className="w-full p-4">
        <div className="flex gap-2 justify-between">
          <CardDescription>total salah:</CardDescription>
          <CardTitle>{user?.wrong}</CardTitle>
        </div>
      </Card>
      <Card className="w-full p-4">
        <div className="flex gap-2 justify-between">
          <CardDescription>Kecepatan Kerja (PANKER):</CardDescription>
          <CardTitle>{user?.panker}</CardTitle>
        </div>
      </Card>
      <Card className="w-full p-4">
        <div className="flex gap-2 justify-between">
          <CardDescription>Ketelitian Kerja (TINKER):</CardDescription>
          <CardTitle>{user?.tinker}</CardTitle>
        </div>
      </Card>
      <Card className="w-full p-4">
        <div className="flex gap-2 justify-between">
          <CardDescription>Keajegan Kerja (JANKER):</CardDescription>
          <CardTitle>{user?.janker}</CardTitle>
        </div>
      </Card>
      <Card className="w-full p-4">
        <div className="flex gap-2 justify-between">
          <CardDescription>Ketahanan Kerja (HANKER):</CardDescription>
          <CardTitle>{user?.hanker}</CardTitle>
        </div>
      </Card>
    </div>
  );
};

export default CardDetailData;
