import { Link } from "react-router-dom";
import Container from "./Container";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const handleLogout = () =>{
    logOut()
    .then(result =>{})
    .catch(error =>{
      console.log(error)
    })
  }

  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Our Portfolio</Link>
      </li>
      <li>
        <Link to="/">Our Team</Link>
      </li>
      <li>
        <Link to="/">Contact Us</Link>
      </li>
      {user ? <></> : <></>}
    </>
  );
  return (
    <div className=" bg-base-100 bg-pink-50">
      <Container>
        <div className="navbar">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navOption}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl font-bold">
              {" "}
              woman Parlour
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOption}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
               <Link onClick={handleLogout} className="btn bg-pink-600  text-white" to="/logout">
              logOut
            </Link>
              </>
            ) : (
              <>
                <Link className="btn bg-pink-600  text-white" to="/login">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
