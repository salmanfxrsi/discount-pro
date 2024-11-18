import { Link } from "react-router-dom";
import mainDeveloper from "../../assets/maindeveloper.jpg"
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const DeveloperProfile = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md lg:max-w-3xl w-11/12 mx-auto">
      <img
        src={mainDeveloper}
        alt="Developer"
        className="w-32 h-32 rounded-full mb-4 border-2"
      />
      <h1 className="text-2xl font-black text-gray-800">Salman Farsi</h1>
      <h1 className="text-xl font-black text-gray-800">Front End Developer</h1>
      <p className="text-gray-600 mt-2 text-center font-semibold">
      Salman Farsi is a passionate web developer with expertise in creating responsive and interactive web applications using modern frameworks and technologies. He is proficient in front-end development, with deep knowledge of Java, React, HTML, and CSS, and has solid experience in back-end development for building complete, robust web solutions
      </p>
      <div className="flex mt-4 space-x-4 text-2xl">
        <Link to={"https://facebook.com/salman.farsi.259647/"}><FaFacebook></FaFacebook></Link>
        <Link to={"https://github.com/salmanfxrsi"}><FaGithub></FaGithub></Link>
        <Link to={"https://www.instagram.com/salmanfxrsi/"}><FaInstagram></FaInstagram></Link>
      </div>
    </div>
  );
};

export default DeveloperProfile;
