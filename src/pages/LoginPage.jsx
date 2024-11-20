import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { googleSignIn,handleLogin,setUser } = useContext(AuthContext);
  const [error,setError] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    handleLogin(email,password)
    .then(result => {
        setUser(result.user);
        navigate("/");
        e.target.reset();
    })
    .catch(error => {
         setError('');
         setError(error.message);
         return;
    })
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      setUser(result.user);
      navigate("/")
    })
    .catch((error) => {
      console.log(error);
    });
  }


  return (
    <div className="flex items-center justify-center min-h-screen winter-snow">
      <div className="lg:w-full w-11/12 max-w-md p-6 bg-winter rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        <form onSubmit={handleEmailLogin} className="mt-4">
          <div className="mb-4">
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
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="mb-4 relative">
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
          <p className="text-red-500 font-black text-sm mb-3">{error && error}</p>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-600">Forgot your password?</span>
          <button className="text-sm text-indigo-500 hover:underline focus:outline-none">
            Reset Password
          </button>
        </div>
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
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              to={"/registration"}
              className="font-medium text-indigo-500 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
