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

async function ProfilePage() {
  const user = await currentUser();

  const userInfo = {};
  const userDataAccount = {
    id: user?.id,
    objectId: userInfo._id,
    username: user?.username,
    name: user?.firstName || "",
    image: user?.imageUrl,
    createdAt: user?.createdAt || 0,
    testCompleted: userInfo?.testCompleted || 0,
    totalPlayed: userInfo?.totalPlayed || 0,
    accumulationTime: userInfo?.accumulationTime || 0,
  };

  const userDataStats = {
    id: user?.id,
    objectId: userInfo._id,
    correct: userInfo?.correct || 0,
    wrong: userInfo?.wrong || 0,
    PANKER: userInfo?.PANKER || 0,
    TINKER: userInfo?.TINKER || 0,
    JANKER: userInfo?.JANKER || 0,
    HANKER: userInfo?.HANKER || 0,
  };
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <AccountProfile user={userDataAccount} />
      <Card>
        <div className="flex flex-col h-full w-full p-20">
          <ChartLine />
        </div>
      </Card>
      <CardStats user={userDataStats} />
    </div>
  );
}

export default ProfilePage;
