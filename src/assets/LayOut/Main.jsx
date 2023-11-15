import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

const Main = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;