import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
//import Contact from "./components/Contact";
import { Error } from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      loggedInUser: "Vikas Thulasi",
    };
    setUserName(data.loggedInUser);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

//lazy Loading

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
//const Cart = lazy(() => import("./components/Cart"));
// const RestuarantMenu = lazy(() => import("./components/RestuarantMenu"));

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restuarants/:resId",
        element: (
          // <Suspense fallback={<h1>Loading.....</h1>}>
          <RestuarantMenu />
          // </Suspense>
        ),
      },
      {
        path:"/cart",
        element: (
         // <Suspense fallback={<h1>Loading.....</h1>}>
          <Cart />
          //</Suspense>
        )
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig} />);
