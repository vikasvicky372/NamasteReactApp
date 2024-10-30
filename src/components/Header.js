import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useLocation from "../utils/useLocatioin";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const location = useLocation();
  const onlineStatus =  useOnlineStatus();

  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <div className="locate">
          <h3 className="locate">{location ? location.city.name + "📍" : ""}</h3>
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus?"🟢":"🔴"}</li>
          <li>
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to={"/about"}>
              About Us
            </Link>
          </li>
          <li>
            <Link className="link" to={"./contact"}>
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                setBtnLogin(btnLogin === "Login" ? "Logout" : "Login");
              }}
            >
              {btnLogin}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
