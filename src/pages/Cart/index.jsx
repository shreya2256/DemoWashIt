import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../../ components";
import BuyMoreSaveComponent from "../../ components/BuyMoreSaveComponent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BreadcrumbNavigation from " ./BreadcrumbNavigation";
import CartRowTwo from"./CartRowTwo";
import RecentlyViewedSection from "./RecentlyViewedSection";
import React, { Suspense } from "react";

const promotionaloffersList = [
{ 
buyMoreSaveImage: "images/img_fi11370591.svg",
buyMoreSaveTitle: "Buy More Save More",
buyMoreSaveOffer: "Get 5% off* on cart value for 2 or more eligible products purchased together",
addButtonText: "Add",
},
{ 
buyMoreSaveImage: "images/img insurance__a_cdozeged. svg",
buyMoreSaveTitle: "TechVolt Care+",
buyMoreSaveOffer: "Get 5% off* on cart value for 2 or more eligible products purchased together",
addButtonText: "Add",
},
{ 
buyMoreSaveImage: "images/img_ la_cart-png",
buyMoreSaveTitle: "Exchange Offer",
buyMoreSaveOffer: "Get 5% off* on cart value for 2 or more eligible products purchased together",
addButtonText: "Add",
},
];

export default function CartPage() {
    return (
    <>
    <Helmet>
    <title>Your Shopping Cart | TechVolt Electronics</title>
    <meta 
    name="description"
    content="Review your TechVolt shopping cart with a 7Kg Front Load Washing Machine and more. Enjoy free delivery, easy installation, and great savings on top tech."
    />
    </Helmet>

    {/* cart page section */}
    <div className="w-full bg-white-a700">
    {/* page header section */}
    <div>
    {/* navigation header section */}
    <Header />

    {/* breadcrumb navigation section */}
    <BreadcrumbNavigation />
    </div>

    {/* shopping cart steps section */}
    <div className="mt-10 flex flex-col gap-[38px]">
    <CartRowTwo />

    {/* shopping cart details section */}
    <div className="flex justify-center"> 
    <div className="container-sm flex justify-center md:p-5">
    <div className="flex w-full items-start gap-10 md:flex-col">
    <div className="flex flex-1 items-start gap-10 md:flex-col md:self-stretch">
< Img
src="images/ img_image_3_148X148-png"
alt="Product Image"
className="h- [94px] w-[10%] rounded-md object-contain md:w-full"
/>
<div className="flex flex-1 flex-col gap-6 self-center md:self-stretch">
<div className="flex flex-col gap-[22px]"> 
<div className="flex items-start gap-10 md:flex-col"> 
<div className="flex flex-1 flex-col gap-4 self-center md: self-stretch"> 
<div className="flex flex-col items-start justify-center gap-2"> 
<Heading as="h1" className="w-full leading-6">
7Kg Front Load Washing Machine, Inverter Direct Drive, Middle Black
</Heading>
<Text size="textxs" as="p" className="! font-medium" >
Fulfilment By: TechVolt India Electronics Pvt. Ltd.
</Text>
</div>
<div className="flex flex-col items-start justify-center gap-1.5">
<Text size="textxs" as="p" className="| font-medium Itext-black-900_02">
Free Delivery: By Wed, Apr 24th
</Text>
<Text size="textxs" as="p" className="! font-medium !text-black-900 02">
Installation & Demo: By Thu, Apr 25th
</Text>
</div>
</div>
<div className="flex w-[24%] flex-col items-end justify-center gap-0.5 md:w-full"> 
<Heading size="headingmd" as="h2" >
26490.00
</Heading>
<div className="flex flex-wrap justify-end gap-1.5 self-stretch"> 
<Text size="textxs" as="p" className="!font-medium !text-teal-400">
Save 14500.00
</Text>
<Text size="textxs" as="p" className="line-through">
40990.00
</Text>
</div>
</div>
</div>
<div className="h-px bg-gray-300_04" />
<div className="flex flex-col items-start gap-4"> 
<Heading size="headingxs" as="h">
Price Breakdown
</Heading>
<div className="flex flex-col gap-1 self-stretch"> 
<div className="flex flex-wrap justify-between gap-5">
<Text size="textxs" as="p" className="! font-medium" >
Price (Inclusive of all taxes)
</Text>
<Text size="textxs" as="p" className=" !font-medium" >
40990.00
</Text>
</div>
<div className="flex flex-wrap justify-between gap-5">
<Text size="textxs" as="p" className="! font-medium">
Promotional Discounts(s)
</Text>
<Text size="textxs" as="p" className="! font-medium" >
-114500.00
</Text>
</div>
<div className="flex flex-wrap justify-between gap-5">
<Text size="textxs" as="p" className="! font-medium" >
Discount
</Text>
<Text size="textxs" as="p" className="! font-medium" >
-750.00
</Text>
</div>
</div>
</div>
<div className="h-px bg-gray-300_04" />
<div className="flex flex-col gap-4">
<Suspense fallback={<div>Loading feed...</div>}>
{promotionaloffersList.map((d, index) => (
<BuyMoreSaveComponent {...d} key={"colorList" + index} />
))}
</Suspense>
</div>
</div>
<div className="flex justify-end gap-[25px]"> 
<Heading as="h4" className="under line">
Add One More
</Heading>
< Img src="images/img_fi_10514406.5vg" alt="Add More Image" className="h-[24px] w-[24px]" />
</div>
</div>
</div>
<div className="flex w-[38%] justify-center md:w-full">
<div className="flex w-full flex-col gap-9 rounded-[16px] border border-solid border-black-900_02 bg-gray-100 p-[22px] sm:p-5">
<div className="flex flex-col gap-[22px]">
<div className="flex justify-between gap-5sm: flex-col">
<div className="flex flex-col items-start gap-2"> 
<Heading size="heading2x1" as="h5">
Total
</Heading>
<Text as="p">Includes GST*</Text>
</div>
<div className="flex flex-1 flex-col items-end gap-2 sm: self-stretch">
<Heading size="heading2x1" as="h6">
26490.00
</Heading>
<div className="flex flex-wrap justify-end gap-[7px] self-stretch">
<Text as="p" className="line-through">
140990.00
</Text>
<Text as="p" className="! font-medium !text-teal-400">
Save 714500.00
</ Text>
</div>
</div>
</div>
<div className="h-px bg-gray-400 01" />
<div className="flex items-center justify-center rounded-md border border-solid border-black-900_02 bg-white-a700 p-2"> 
<div className="flex flex-1 items-center gap-2 px-2">
<Img src="images/img fi 11370591.svg" alt="Coupon Image" className="h- [30px] w-[30px]" />
<Text as="p" className="self-end !font-light">
Apply coupon code
</Text>
</div>
<div className="flex px-2 py-2.5">
<Text as="p" className="self-end Ifont-inter |font-medium Itext-black-900_02">
Apply
</Text>
</div>
</div>
<div className="flex flex-col items-start justify-center gap-2.5">
<Heading as="h6">Price Breakup</Heading>
<div className="flex flex-col gap-1.5 self-stretch"> 
<div className="flex flex-wrap justify-between gap-5">
<Text as="p">Price (Inclusive of all taxes)</Text>
<Heading as="h6" >*40990.00</Heading>
</div>
<div className="flex flex-wrap justify-between gap-5">
<Text as="p" >Discount</Text>
<Heading as="h6" className="| text-teal-400"> 
14500.00
</Heading>
</div>
<div className="flex flex-wrap items-center justify-between gap-5">
<Text as="p">Shipping charges</Text>
<Heading as="h6" >70.00</Heading>
</div>
</div>
</div>
</div>
<a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="._blank"> 
<Button
color="deep_orange_A700"
size="2xl"
shape="round"
className="self-stretch Irounded-[26px] font-inter font-bold"
>
Next
</Button>
</a>
</div>
</div>
</div>
</div>
</ div>
</div>

{/* recently viewed section */}
< RecentlyViewedSection />

{/* footer section */}
<Footer className="mt-20" />
</div>
</>
);
}