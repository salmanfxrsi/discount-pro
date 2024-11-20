import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar/Navbar";
import AOS from 'aos';
import { useEffect } from "react";
import Snowfall from "react-snowfall";

const MainLayout = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false, 
        });
      }, []);

    return (
        <div>
            <Snowfall snowflakeCount={150} />
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;