"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  userDataAccount: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    image: string;
    createdAt: number;
  };
  userDataStats: {
    totalPlayed: number;
    accumulationTime: number;
  };
}

const AccountProfile = ({ userDataAccount, userDataStats }: Props) => {
  const timestamp = userDataAccount?.createdAt;
  const date = new Date(timestamp);
  return (
    <Card>
      <div className="flex flex-row justify-between p-6">
        <div className="flex flex-row w-1/2 items-center gap-4 ">
          <img
            src={userDataAccount?.image || ""}
            className="object-cover w-[4.6rem] h-w-[4.6rem] rounded-full"
            alt={userDataAccount?.image || ""}
          />
          <div className="flex flex-col">
            <h1>{userDataAccount?.name || ""}</h1>
            <h1>
              Joined At {""}
              {date.toLocaleDateString()}
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full items-center">
          <div className="flex flex-col justify-center">
            <CardDescription>test started</CardDescription>
            <CardTitle>{userDataStats?.totalPlayed || 0}</CardTitle>
          </div>
          <div className="flex flex-col justify-center">
            <CardDescription>test completed</CardDescription>
            <CardTitle>{userDataStats?.totalPlayed || 0}</CardTitle>
          </div>
          <div className="flex flex-col justify-center">
            <CardDescription>accumulation time</CardDescription>
            <CardTitle>{userDataStats?.accumulationTime || 0}</CardTitle>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AccountProfile;
