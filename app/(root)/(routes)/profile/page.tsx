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
      {/* <div className="flex flex-row w-full justify-between gap-4">
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
      </div> */}
    </div>
  );
}

export default ProfilePage;
