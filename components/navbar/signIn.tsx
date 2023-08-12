import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const LoginButtonNav = () => {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return (
      <Link
        href="/sign-in"
        className="text-muted-foreground text-sm group p-3 font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition justify-center"
      >
        Sign In
      </Link>
    );
  } else {
    return null;
  }
};

export default LoginButtonNav;
