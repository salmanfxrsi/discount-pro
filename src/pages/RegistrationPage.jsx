import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email,password)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700">
          Register
        </h2>
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
              name="photoURL"
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

          {/* Register Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Register
          </button>
        </form>

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
