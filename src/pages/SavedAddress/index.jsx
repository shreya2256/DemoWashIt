import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../ components/Header";
import AddressSelection from "./AddressSelection";
import CheckoutSteps from "./CheckoutSteps";
import RecentlyViewedProducts from "./RecentlyViewedProducts";
import React from "react";

export default function SavedAddressPage() { 
return (
<> 
<Helmet>
<title>Saved Address - Manage Your Shipping Locations</title>
<meta
name="description"
content="Easily manage and edit your saved addresses for a seamless checkout experience. Add new addresses and update existing ones to ensure accurate delivery of your TechVolt purchases."
/>
</Helmet>
<div className="w-full bg-white-a700"> 
{/* main header section */}
<div>
<Header />

{/* breadcrumb navigation section */}
<div className="flex justify-center border-b border-solid border-gray-200 bg-white-a700 py-3">
<div className="container-sm flex items-center gap-1.5 md: p-5 sm: flex-col">
<Text size="textx1" as="p" className="capitalize">
Home
</Text>
<Img
src="images/img arrow right gray 700. svg"
alt="Arrow Icon"
className="h- [24px] w-[24px] self-start sm:W-full sm:self-auto"
/>
<Text size="textxl" as="p" className="! font-medium capitalize">
Product Details
</Text>
< Img
src="images/img_arrow_right_gray_700.svg"
alt="Arrow Icon"
className="h-[24px] w-[24px] self-start sm:w-full sm: self-auto"
/>
<Text size="textxl" as="p" className="!font-medium capitalize !text-black-900_02"> 
Shopping Cart
</Text>
</div>
</div>
</div>

{/* checkout steps section */}
<CheckoutSteps />

{/* address selection section */}
<AddressSelection />

{/* recently viewed products section */}
<RecentlyViewedProducts />

{/* footer section */}
< Footer className="mt-20" />
</div>
</>
);
}