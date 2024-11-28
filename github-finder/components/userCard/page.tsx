import Image from "next/image";

interface UserCardProps {
    user: {
      avatar_url: string;
      login: string;
      name?: string;
      bio?: string;
      followers: number;
      following: number;
      public_repos: number;
      html_url: string;
    };
  }
  
  const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
      <div className="mt-5 p-4 bg-gray-50 rounded-lg shadow-lg">
        <Image
          src={user.avatar_url}
          alt={user.login}
          width={500}
          height={500}
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-xl font-semibold text-center mt-2">
          {user.name || user.login}
        </h2>
        {/* <p className="text-gray-600 text-center">{user.bio || "No bio available"}</p> */}
        <div className="flex justify-around mt-4">
          <div>
            <h4 className="font-bold">{user.followers}</h4>
            <p className="text-sm">Followers</p>
          </div>
          <div>
            <h4 className="font-bold">{user.following}</h4>
            <p className="text-sm">Following</p>
          </div>
          <div>
            <h4 className="font-bold">{user.public_repos}</h4>
            <p className="text-sm">Repos</p>
          </div>
        </div>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 bg-blue-500 text-white text-center py-2 rounded-lg"
        >
          Visit Profile
        </a>
      </div>
    );
  };
  
  export default UserCard;
  