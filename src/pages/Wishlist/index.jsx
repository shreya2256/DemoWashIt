import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../ components/Header";
import ProductsSection from "./ProductsSection";
import React from "react";

export default function WishlistPage() {
return (
<>
<Helmet>
<title>Explore Your Wishlist | TechVolt Electronics</title>
<meta
name="description"
content="Discover your saved favorites, from the latest 5-star ACs to energy-efficient washing machines. Shop now for exclusive deals and discounts on TechVolt."
/>
</Helmet >
<div className="flex w-full flex-col gap-10 bg-white-a700"> 
{/* header section */}
<div>
< Header />

{/* breadcrumb section */}
<div className="flex justify-center border-b border-solid border-gray-200 bg-white-a700 py-3.5">
<div className="container-sm flex items-center gap-1.5 md: p-5"> 
<Text size="textxl" as="p" className="capitalize">
Home
</Text>
<Img src="images/img_arrow_right_gray_700.svg" alt="Arrow Image" className="h-[24px] w-[24px]" />
<Text size="textxl" as="p" className="!font-medium capitalize !text-black-900_02">
Wishlist
</Text>
</div>
</div>
</div>

{/* footer section */}
<Footer/>
</div>
</>
);
}