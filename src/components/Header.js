import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useLocation from "../utils/useLocatioin";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const location = useLocation();
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  let no_of_items = 0;
  if(cartItems.length>0){
    cartItems.forEach(item => {
      no_of_items += item.quantity;
    });
  }

  return (
    <div className="p-2 my-2 flex justify-between bg-orange-100 rounded-md shadow-xl top-0 sticky z-10">
      <div className="flex items-center">
        <img className="h-36 w-36 rounded-xl" src={LOGO_URL} />
        <div className="m-4 items-end">
          <h3 className="items-end">
            {location ? location.city.name + "📍" : ""}
          </h3>
        </div>
      </div>
      <div className="flex items-center no-underline">
        <ul className="flex items-center">
          <li className=" p-2 m-2">
            Online Status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className=" p-2 m-2 hover:bg-red-500 rounded-md">
            <Link className="text-black hover:text-white" to={"/"}>
              Home
            </Link>
          </li>
          <li className=" p-2 m-2 hover:bg-red-500 rounded-md">
            <Link className="text-black hover:text-white" to={"/about"}>
              About Us
            </Link>
          </li>
          <li className=" p-2 m-2 hover:bg-red-500 rounded-md">
            <Link className=" text-black hover:text-white" to={"./contact"}>
              Contact Us
            </Link>
          </li>
          <li className=" p-2 m-2 hover:bg-red-500 rounded-md">
            <Link to="/cart" className="text-black hover:text-white flex items-center">
              <span className="align-middle text-2xl">
                <FiShoppingCart />
              </span>
              {cartItems.length > 0 && <span className="mx-2 px-2 align-middle text-white rounded-md bg-green-700">{no_of_items}
              </span>}
            </Link>
          </li>
          <li className=" p-2 m-2 ">
            <button
              className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              onClick={() => {
                setBtnLogin(btnLogin === "Login" ? "Logout" : "Login");
              }}
            >
              {btnLogin}
            </button>
          </li>
          <li className="p-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
