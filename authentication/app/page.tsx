import Image from "next/image";
import SignInPage from "./component/login/LoginComponent";
import SignOutPage from "./component/login/SignOutComponent";
import { auth } from "@/lib/auth";
import { SessionWrapper } from "./component/SessionWrapper";

export default async function Home() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div>
      <SessionWrapper>
        <SignInPage />
        <SignOutPage />
      </SessionWrapper>
    </div>
  );
}
