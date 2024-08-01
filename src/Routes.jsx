import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import ProductGrid from "pages/ProductGrid";
import ProductDetails from "pages/ProductDetails";
import Wishlist from "pages/Wishlist";
import Cart from "pages/Cart";
import Shippingaddress from "pages/Shippingaddress";
import SavedAddress from "pages/SavedAddress";
import AddnewAddress from "pages/AddnewAddress";
import Paymentinfo from "pages/Paymentinfo";
import PaymentinfoOne from "pages/PaymentinfoOne";
import Signin from "pages/Signin";
import SignUp from "pages/SignUp";
import Profile from "pages/Profile";
import ArrivingMyOrders from "pages/ArrivingMyOrders";
import DeliveredMyOrders from "pages/DeliveredMyOrders";
import DeliveredMyOrdersOne from "pages/DeliveredMyOrdersOne";
import FAQs from "pages/FAQs";

const ProjectRoutes = () => {
    let element = useRoutes ([
      { path: "dhiwise-dashboard", element: <Home /> },
      { path: "*", element: <NotFound /> },
      { 
        path: "/",
        element: <Homepage />,
      },
      {
        path: "productgrid",
        element: <ProductGrid />,
      },
      {
        path: "productdetails",
        element: <ProductDetails />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "shippingaddress",
        element: <Shippingaddress />,
      },
      {
        path: "savedaddress",
        element: <SavedAddress />,
      },
      {
        path: "addnewaddress",
        element: <AddnewAddress />,
      },
      {
        path: "paymentinfo",
        element: <Paymentinfo />,
      },
      {
        path: "paymentinfoone",
        element: <PaymentinfoOne />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: < SignUp />,
      },
      {
        path: "profile",
        element: < Profile />,
      },
      {
        path: "arrivingmyorders",
        element: <ArrivingMyOrders />,
      },
      {
        path: "deliveredmyorders",
        element: <DeliveredMyOrders />,
      },
      {
        path: "deliveredmyordersone",
        element: <DeliveredMyOrdersOne />,
      },
      {
        path: "faqs",
        element: <FAQS />,
      }
    ]);

    return element;
};

export default ProjectRoutes;