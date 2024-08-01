import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../../components";
import CardDetails from "../../components/CardDetails";
import Footer from "../ ../ components/Footer";
import Header from "../../components/Header";
import StepShoppingCart from "../../components/StepShoppingCart";
import UserProfile3 from "../../components/UserProfile3";
import BreadcrumbNavigation from "./BreadcrumbNavigation";
import React, { Suspense } from "react";

const checkoutSteps = [
{ stepNumber: "01", shoppingCartText: "Shopping cart" },
{ stepNumber: "02", shoppingCartText: "Shipping address" },
{ stepNumber: "03", shoppingCartText: "Payment info" },
];
const paymentoptions = [
{ userImage: "images/img_fi_14062982.svg", userText: "Paypal" },
{ userImage: "images/img_fi_14062982_gray_200_01.svg", userText: "Net banking" },
{ userImage: "images/img_fi_14062982_gray_200_01_48x48.svg", userText: "Google pay" },
{ userImage: "images/img_fi_14062982_48x48.svg", userText: "Cash on delivery" },
];

export default function PaymentinfoPage() {
return (
<>
<Helmet> 
<title>Payment Information - Secure Checkout Options</title>
<meta
name="description"
content="Choose your preferred payment method for a secure transaction on TechVolt. Options include PayPal, net banking, Google Pay, and cash on delivery. Save cards for faster future payments."
/> 
</Helmet>
<div className="flex w-full flex-col items-center gap-10 bg-white-a700">
{/* main header section */}
<div className="self-stretch">
<Header />

{/* breadcrumb navigation section */}
<BreadcrumbNavigation />
</div>

{/* checkout steps section */}
<div className="container-sm md:p-5">
<div className="flex flex-col gap-10"> 
<div className="flex pl-[100px] pr-14 md:flex-col md: px-5">
<Suspense fallback={<div>Loading feed...</div>}>
{checkoutSteps.map((d, index) => (
<StepShoppingCart {...d} key={"stepperList" + index} className="w-[32%]" />
))}
</Suspense>
</div>

{/* payment options section */}
<div className="flex items-start gap-10 md: flex-col">
<div className="flex flex-1 flex-col gap-[38px] self-center md: self-stretch"> 
<div className="flex flex-col items-start gap-3.5"> 
<Heading size="text3x1" as="h1" className="Itext-black-900_01">
Payment option
</Heading>
<div className="flex flex-col gap-4 self-stretch">
<Suspense fallback={<div>Loading feed... </div>}>
{paymentoptions.map((d, index) => (
    <UserProfile3 {...d} key={"cardsList" + index} />
    ))}
    </Suspense>
    </div>
    </div>
    <div className="flex flex-col items-start gap-4">
    <Heading size="text3x1" as="h2" className="|text-black-900_01">
    Saved card
    </Heading>
    <div className="flex flex-col gap-6 self-stretch">
    <div className="flex flex-col gap-6">
    <CardDetails />
    <CardDetails
    cardImage="images/img fi 14062982_2. svg"
    cardName="HDFC Debit Card"
    cardNumber="XX48"
    cardExpiry="Exp : 03/22"
    />
    </div>
    <a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank">
    <div className="flex items-center gap-2 rounded-[16px] border border-solid border-blue_gray-100_01 bg-white-a700 p-4">
    <Button color="gray_200_01" size="lg" shape="circle" className="w-[48px] !rounded-[24px]">
    <Img src="images/img_plus.svg" />
    </Button>
    <Text as="p" className=" |font-medium !text-black-900_02">
    Add new card
    </Text>
    </div>
    </a>
    </div>
    </div>
    </div>

{/* order summary section */}
<div className="w- [38%] md:w-full"> 
<div className="flex flex-col gap-9 rounded-[16px] border border-solid border-black-900_02 bg-gray-100 p-[22px] sm:p-5">
<div className="flex flex-col gap-[22px]"> 
<div className="flex justify-between gap-5 sm:flex-col"> 
<div className="flex flex-col items-start gap-2">
<Heading size="heading2x1" as="h3">
Total
</Heading>
<Text as="p">Includes GST*</Text>
</div>
<div className="flex flex-1 flex-col items-end gap-2 sm:self-stretch"> 
<Heading size="heading2x1" as="h4">
26490.00
</Heading>
<div className="flex flex-wrap justify-end gap-[7px] self-stretch"> 
<Text as="p" className="line-through">
40990.00
</Text>
<Text as="p" className=" !font-medium text-teal-400">
Save 14500.00
</Text>
</div>
</div>
</div>
<div className="h-px bg-gray-400_01" />
<div className="flex flex-col gap-5"> 
<div className="flex flex-col items-start justify-center gap-2.5">
<Heading as="h5">Price Breakup</Heading>
<div className="flex flex-col gap-1.5 self-stretch"> 
<div className="flex flex-wrap justify-between gap-5">
<Text as="p">Price (Inclusive of all taxes)</Text>
<Heading as="h6" >740990.00</Heading>
</div>
<div className="flex flex-wrap justify-between gap-5"> 
<Text as="p">Discount</Text>
<Heading as="h6" className="Itext-teal-400">
-14500.00
</Heading>
</div>
<div className="flex flex-wrap items-center justify-between gap-5">
<Text as="p">Shipping charges</Text>
<Heading as="h6" >70.00</Heading>
</div>
</div>
</div>
<div className="h-px bg-gray-400_01" />
</div>
<div className="flex flex-col items-start justify-center gap-3"> 
<Heading as="h6" >Order summary (1 item)</Heading>
<div className="flex flex-col gap-2 self-stretch"> 
<div className="flex items-start justify-center sm:flex-col"> 
<Text as="p" className="w-[82%] self-center leading-5 sm:w-full">
7Kg Front Load Washing Machine, Inverter Direct Drive, Middle Black
</Text>
<Heading as="h6">40990.00</Heading>
</div>
<div className="flex flex-wrap justify-between gap-5"> 
<Text as="p" className="Itext-black-900_02">
Free Delivery: By Wed, Apr 24th
</Text>
< Heading as="h6" className="| text-black-900_02">
FREE
</Heading>
</div>
</div>
</div>
</div>
<div className="flex justify-center gap-4">
<a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank"> 
<Button
size="2xl"
shape="round"
className="min-w-[136px] rounded-[26px] border border-solid border-black-900_02 font-inter font-medium"
>
Back
</Button>
</a>
<a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
<Button
color="deep_orange_A700"
size="2x1"
shape="round"
className="min-w-[312px] Irounded-[26px] font-inter font-bold"
>
Proceed to checkout
</Button>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
{/* footer section */}
<Footer className="self-stretch" />
</div>
</>
);
}