import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div>
            <header className="mb-24">
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className="mt-24">
                <Footer></Footer>
            </footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;