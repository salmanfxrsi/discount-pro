import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ForgetPasswordPage = () => {
    const { forgetPassword } = useContext(AuthContext);
    const [command,setCommand] = useState("");
    const [error,setError] = useState("");

  const handleForgetPassword = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    setError("")
    setCommand("")

    forgetPassword(email)
    .then(()=>{
        setCommand("Email sent! Check your email to reset your password.")
    })
    .catch(error => {
        setError(error.message)
    })
  };

  return (
    <div className="flex items-center justify-center py-44 winter-snow">
      <div className="lg:w-full w-11/12 max-w-md p-6 bg-winter rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">
          Reset Password
        </h2>
        <form onSubmit={handleForgetPassword} className="mt-4">
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
              autoComplete="off"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          {/* Command And Error Message */}
          <p className="text-green-500 font-black text-sm mb-3">{command && command}</p>
          <p className="text-red-500 font-black text-sm mb-3">{error && error}</p>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#2C8BBF] rounded-md hover:bg-[#2c8cbfbe] focus:outline-none focus:bg-[#2c8cbfbe]"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
