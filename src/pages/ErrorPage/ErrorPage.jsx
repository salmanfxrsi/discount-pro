import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-winter text-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-3xl font-black text-[#2C8BBF] mt-4">Page Not Found</h2>
        <p className="mt-2 mb-6 text-lg text-[#2C8BBF] font-black">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link 
          to={"/"}
          className="px-5 py-2 bg-[#2C8BBF] text-white rounded-md hover:bg-[#2c8cbfbe] transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
