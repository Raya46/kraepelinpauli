import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";

const AccountProfile = () => {
  const { isSignedIn, user } = useUser();
  if (isSignedIn)
    return (
      <Card>
        <div className="flex flex-row justify-between p-6">
          <div className="flex flex-row w-1/2 items-center gap-4 ">
            <img
              src={user?.profileImageUrl}
              className="object-cover w-[4.6rem] h-w-[4.6rem] rounded-full"
              alt={user?.profileImageUrl}
            />
            <div className="flex flex-col">
              <h1>{user?.firstName}</h1>
              <h1>
                Joined {""}
                {user.createdAt
                  ?.toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })
                  .replaceAll(",", "")}
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
