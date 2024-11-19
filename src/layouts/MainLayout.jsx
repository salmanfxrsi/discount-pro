import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
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