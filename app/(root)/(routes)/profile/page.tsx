import AccountProfile from "@/components/accountProfile/page";
import ChartLine from "@/components/accountProfile/chart-c";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs";
import CardStats from "@/components/accountProfile/cardStats";
import { getBestUserData } from "@/lib/actions/user.actions";

async function ProfilePage() {
  const user = await currentUser();

  const userInfo = {};
  const userDataAccount = {
    id: user?.id,
    username: user?.username,
    name: user?.firstName || "",
    image: user?.imageUrl,
    createdAt: user?.createdAt || 0,
  };

  const userDataStats = {
    id: user?.id,
    totalPlayed: userInfo?.totalPlayed || 0,
    accumulationTime: userInfo?.accumulationTime || 0,
    correct: userInfo?.correct || 0,
    wrong: userInfo?.wrong || 0,
    panker: userInfo?.panker || 0,
    tinker: userInfo?.tinker || 0,
    janker: userInfo?.janker || 0,
    hanker: userInfo?.hanker || 0,
  };

  return (
    <div className="container mx-auto flex flex-col gap-10">
      <AccountProfile userDataAccount={userDataAccount} />
      <div className="flex w-full gap-6">
        <Card className="flex flex-col w-1/2 justify-center items-center p-5">
          <ChartLine />
        </Card>
        <CardStats userDataStats={userDataStats} />
      </div>
    </div>
  );
}

export default ProfilePage;
