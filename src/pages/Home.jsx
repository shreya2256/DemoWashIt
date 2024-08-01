import React from "react";
import { Link } from "react-router-dom";
const Home = 0 => {
return (
<div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
<h1 style={{ fontsize: "48px", marginBottom: "20px" }} >Homepage</h1>
<p style={{ fontsize: "18px" , marginBottom: "30рх" }}>
This project was generated By{" "}
<a href="https://www.dhiwise.com" style={{ color: "#87CEFA", textDecoration: "none" }}>
Dhiwise
</a>
. Quickly use below links to navigate through all pages.
</р>
<ul style={{ liststyle: "none", padding: "0" }}>
<li style={{ marginBottom: "10px" }}>
<Link to="/" style={{ color: "#87CEFA", textDecoration: "none" }}>
Homepage
</Link>
</li>
<li style={{ marginBottom: "10px" }}>
<Link to="/productgrid" style={{ color: "#87CEFA", textDecoration: "none" }}>
ProductGrid
</Link>
</li>
<li style={{ marginBottom:"10px" }}>
<Link to="/productdetails" style={{  color:"#87CEFA", textDecoration: "none" }}>
ProductDetails
</Link>
</li>
<li style={{ marginBottom: "10px" }}>
<Link to="/wishlist" style={{ color: "#87CEFA", textDecoration: "none" }}>
Wishlist
</Link>
</li>
<li style={{ marginBottom: "10px" }}>
<Link to="/cart" style={{ color: "#87CEFA", textDecoration: "none" }}>
Cart
</Link>
</li>
<li style={{ marginBottom: "10px" }}> 
<Link to="/shippingaddress" style={{ color: "#87CEFA", textDecoration: "none" }}>
Shippingaddress
</Link>
</li>
<li style={{ marginBottom: "10px" }}>
<Link to="/savedaddress" style={{ color: "#87CEFA", textDecoration: "none" }}>
SavedAddress
</Link>
</li>
<li style={{ marginBottom: "10px" }}> 
<Link to="/addnewaddress" style={{  color: "#87CEFA", textDecoration: "none" }}>
AddnewAddress
</Link>
</li>
<li style={{ marginBottom: "10px" }}>
<Link to="/paymentinfo" style={{ color: "#87CEFA", textDecoration: "none" }}>
Paymentinfo
</Link>
</li>
<li style={{ marginBottom: "10px" }}>
<Link to="/paymentinfoone" style={{ color: "#87CEFA", textDecoration: "none" }}> 
PaymentinfoOne
</Link>
</li>
<li style={{ marginBottom: "10px" }}>
<Link to="/signin" style={{ color: "#87CEFA", textDecoration: "none" }}>
Signin
</Link>
</li>
<li style={{ marginBottom: "10px" }}> 
<Link to="/signup" style={{  color: "#87CEFA", textDecoration: "none" }}>
SignUp
</Link>
</li>
<li style={{ marginBottom: "10px" }}>
<Link to="/profile" style={{ color:"#87CEFA", textDecoration: "none" }}>
Profile
</Link>
</li>
<li style={{ marginBottom: "10px" }}>
<Link to="/arrivingmyorders" style={{ color: "#87CEFA", textDecoration: "none" }}>
ArrivingMyOrders
</Link>
</li>
<li style={{ marginBottom:"10px" }}>
<Link to="/deliveredmyorders" style={{  color: "#87CEFA", textDecoration: "none" }}>
DeliveredMyOrders
</Link>
</li>
<li style={{ marginBottom: "10px" }}>
<Link to="/deliveredmyordersone" style={{ color: "#87CEFA", textDecoration:"none" }}> 
DeliveredMyOrdersOne
</Link>
</li>
<li style={{ marginBottom: "10px" }}>
<Link to="/faqs" style={{ color: "#87CEFA", textDecoration: "none" }}>
FAQS
</Link>
</li>
</ul>
</div>
);
};
export default Home;