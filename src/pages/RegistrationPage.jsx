import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, setUser, googleSignIn, manageProfile} = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const image = form.get("image");
    setError("")
    setSuccess("")

    // Password must be more more than 5 Letters
    if (password.length < 6) {
      setError("");
      setError("Length must be at least 6 character");
      return;
    }

    // Regex of password must contain at least one uppercase and one lowercase letter.
    if (!/^(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)) {
      setError("Password must have both uppercase and lowercase letters.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        setUser({...result.user,displayName:name,photoURL:image})
        manageProfile(name,image)
        e.target.reset();
        setSuccess("Registered Successfully");
        toast.success("Welcome! Registration successful",{
          className: "custom-toast"
        })
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      setUser(result.user);
      toast.success("Welcome! Registration successful",{
        className: "custom-toast"
      })
      navigate("/")
    })
    .catch((error) => {
      setError(error.message);
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 winter-snow">
      <div className="lg:w-full w-11/12 max-w-lg p-6 bg-white rounded-lg shadow-lg bg-winter">
        <h2 className="text-3xl font-bold text-center text-white">Register</h2>
        <form onSubmit={handleRegistration} className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-600"
            >
              Photo URL
            </label>
            <input
              type="text"
              name="image"
              autoComplete="off"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              autoComplete="off"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-500 hover:text-indigo-500 focus:outline-none"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>

          {/* Error Messages */}
          <p className="text-red-500 font-black text-sm">{error && error}</p>
          <p className="text-black font-black text-sm">{success && success}</p>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#2C8BBF] rounded-md hover:bg-[#2c8cbfbe] focus:outline-none focus:bg-[#2c8cbfbe]"
          >
            Register
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm text-gray-600">
            <span className="px-2 font-black">OR</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
          >
            <FaGoogle className="mr-2" />
            Login with Google
          </button>
        </div>
        {/* Redirect to Login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-indigo-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
