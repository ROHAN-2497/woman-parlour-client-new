import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

const Main = () => {
    const location = useLocation();
    console.log(location);
const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
          <NavBar></NavBar>
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;