import { useContext } from "react";
import 'animate.css';
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
const ProfileCard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center px-4 py-6 bg-gray-100 rounded-lg shadow-md lg:max-w-3xl w-11/12 mx-auto bg-winter">
      <h1 className="text-xl font-black text-gray-800 lg:text-white text-center mb-6 animate__animated animate__fadeInDown">
        Welcome back to your profile, {user?.displayName} ! We&apos;re glad to
        see you again.
      </h1>
      <img
        src={user?.photoURL}
        alt="Developer"
        className="w-32 h-32 rounded-full mb-4 border-2"
      />
      <h1 className="text-2xl font-black text-gray-800">{user?.displayName}</h1>
      <h1 className="text-xl font-black text-gray-800">{user?.email}</h1>
      <Link to={"/update-profile"} className="px-4 bg-[#2C8BBF] text-white py-2 mt-4 rounded-lg font-semibold hover:bg-[#2c8cbfbe] transition mx-auto block text-center">
        Update Information
      </Link>
    </div>
  );
};

export default ProfileCard;
