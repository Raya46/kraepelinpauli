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
  if (!user) return null;

  const bestUser = await getBestUserData(user.id);
  const userDataAccount = {
    id: user?.id,
    username: user?.username,
    name: user?.firstName || "",
    image: user?.imageUrl,
    createdAt: user?.createdAt || 0,
  };

  return (
    <div className="container mx-auto flex flex-col gap-10">
      <div className="flex w-full gap-6 mt-10">
        <Card className="flex flex-col w-full justify-center items-center p-5">
          <ChartLine dataGame={bestUser} />
        </Card>
        <CardStats userDataStats={bestUser} />
      </div>
      <AccountProfile userDataAccount={userDataAccount} />
    </div>
  );
}

export default ProfilePage;
