'use client'
import { useState } from "react";
import UserCard from "./components/userCard/page";

interface GitHubUser {
  login: string;
  avatar_url: string;
  name?: string;
  bio?: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [error, setError] = useState<string>("");

  const fetchUser = async () => {
    try {
      setError("");
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data: GitHubUser = await response.json();
      setUserData(data);
    } catch (err) {
      setUserData(null);
      setError("User not found");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-5">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">GitHub User Finder</h1>
        <div className="flex space-x-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-full px-4 py-2 border rounded-lg text-black"
          />
          <button
            onClick={fetchUser}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Search
          </button>
        </div>
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        {userData && <UserCard user={userData} />}
      </div>
    </div>
  );
}
