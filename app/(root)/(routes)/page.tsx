import Game from "@/components/homePageComp/game";
import { currentUser } from "@clerk/nextjs";

async function RootPage() {
  const user = await currentUser();
  const userDataAccount = {
    id: user?.id,
    username: user?.firstName,
  };

  return (
    <div className="container mx-auto">
      <Game userDataAccount={userDataAccount} />
    </div>
  );
}

export default RootPage;
