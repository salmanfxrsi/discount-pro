import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

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
        </div>
    );
};

export default MainLayout;