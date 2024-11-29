import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-8 text-gray-700">Authentication</h1>
      <div className="flex gap-4">
        {/* Sign In Button */}
        <Link
          href="/api/auth/signin"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Sign In
        </Link>
        {/* Sign Out Button */}
        <Link
          href="/api/auth/signout"
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
        >
          Sign Out
        </Link>
      </div>
    </div>
  );
}
