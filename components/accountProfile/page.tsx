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
    username: string | null;
    name: string;
    image: string;
    createdAt: number;
  };
}

const AccountProfile = ({ userDataAccount }: Props) => {
  const timestamp = userDataAccount?.createdAt;
  const date = new Date(timestamp);
  return (
    <Card className="mb-6">
      <div className="flex justify-between p-6">
        <div className="flex w-1/2 items-center gap-4 ">
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
      </div>
    </Card>
  );
};

export default AccountProfile;
