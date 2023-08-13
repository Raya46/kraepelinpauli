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
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    image: string;
    createdAt: number;
    correct: number;
    wrong: number;
    totalPlayed: number;
    PANKER: number;
    TINKER: number;
    JANKER: number;
    HANKER: number;
  };
}

const AccountProfile = ({ user }: Props) => {
  return (
    <Card>
      <div className="flex flex-row justify-between p-6">
        <div className="flex flex-row w-1/2 items-center gap-4 ">
          <img
            src={user?.image || ""}
            className="object-cover w-[4.6rem] h-w-[4.6rem] rounded-full"
            alt={user?.image || ""}
          />
          <div className="flex flex-col">
            <h1>{user?.name || ""}</h1>
            <h1>
              Joined {""}
              {
                user?.createdAt
                // .toLocaleString(["en-US", "short", "2-digit", "numeric"])
                // .replaceAll(",", "") || ""
                // ?.toLocaleString("en-US", {
                //   month: "short",
                //   day: "2-digit",
                //   year: "numeric",
                // })
                // .replaceAll(",", "")}
              }
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full items-center">
          <div className="flex flex-col justify-center">
            <CardDescription>test started</CardDescription>
            <CardTitle>723</CardTitle>
          </div>
          <div className="flex flex-col justify-center">
            <CardDescription>test completed</CardDescription>
            <CardTitle>723</CardTitle>
          </div>
          <div className="flex flex-col justify-center">
            <CardDescription>accumulation time</CardDescription>
            <CardTitle>723</CardTitle>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AccountProfile;
