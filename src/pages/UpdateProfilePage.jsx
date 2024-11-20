import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfilePage = () => {
  const { manageProfile } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleUpdateProfile = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const image = e.target.image.value
    manageProfile(name,image)
    .then(() => {
        e.target.reset();
        navigate("/profile");
    })
  };

  return (
    <div className="flex items-center justify-center py-44 winter-snow">
      <div className="lg:w-full w-11/12 max-w-md p-6 bg-winter rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">
          Update Your Profile Here
        </h2>
        <form onSubmit={handleUpdateProfile} className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="name"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Photo URL
            </label>
            <input
              type="url"
              name="image"
              required
              placeholder="Enter your image URL"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#2C8BBF] rounded-md hover:bg-[#2c8cbfbe] focus:bg-[#2c8cbfbe]"
          >
            Update Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
