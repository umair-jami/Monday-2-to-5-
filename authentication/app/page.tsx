import SignInPage from "./component/login/LoginComponent";
import SignOutPage from "./component/login/SignOutComponent";
import { auth } from "@/lib/auth";
import { SessionWrapper } from "./component/SessionWrapper";

export default async function Home() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <SessionWrapper>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to the Authentication App</h1>
        {isAuthenticated ? (
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">You are logged in as <span className="font-semibold">{session.user?.name || "User"}</span>.</p>
            <SignOutPage />
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">Please sign in to continue.</p>
            <SignInPage />
          </div>
        )}
      </SessionWrapper>
    </div>
  );
}
