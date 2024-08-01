import { Helmet } from "react-helmet";
import { Button, Heading, Text, SelectBox, Img, Input } from "../../components";
import CardDetails from "../../components/CardDetails";
import Footer from "../../ components/Footer";
import Header from "../../ components/Header";
import UserProfile3 from "../../components/UserProfile3";
import CheckoutSteps from "./Checkoutsteps";
import React, { Suspense } from "react";

const paymentOptions = [
{ userImage:"images/img_fi_14062982.svg", userText: "Paypal" },
{ userImage: "images/img_fi_14062982_gray_200_01.svg", userText: "Paypal" },
{ userImage: "images/img_fi14062982_gray_200._01_48x48-svg", userText: "Paypal" },
{ userImage:"images/img_fi_14062982_48x48.svg", userText: "Cash on delivery" },
];
const dropDownOptions = [
{ label: "Option1", value: "option1" },
{ label: "Option2", value: "option?" },
{ label: "Option3", value: "option?" },
];

export default function PaymentinfoOnePage() {
return (
<> 
<Helmet>
<title>Payment Options - Checkout Securely at Techvolt</title>
<meta
name="description"
content="Choose your preferred payment method for a seamless checkout experience. Options include PayPal, Net Banking, Google Pay, and COD.Secure your purchase with TechVolt."
/>
</Helmet>
<div className="flex w-full flex-col gap-10 bg-white-a700">
{/* main header section */}
<div>
<Header />
<div className="flex justify-center border-b border-solid border-gray-200 bg-white-a700 py-3">
<div className="container-sm flex items-center gap-1.5 md:p-5 sm:flex-col">
<Text size="textxl" as="p" className="capitalize">
Home
</Text>
<Img
src="images/img_arrow_right_gray_700.svg"
alt="Arrow Icon"
className="h-[24px] w-[24px] self-start sm:w-full sm: self-auto"
/>
<Text size="textxl" as="p" className="!font-medium capitalize">
Product Details
</Text>
<Img
src="images/img_ arrow_right_gray_700.svg"
alt="Arrow Icon"
className="h-[24px] w-[24px] self-start sm:w-full sm: self-auto"
/>
<Text size="textxl" as="p" className="!font-medium capitalize Itext-black-900_02"> 
Shopping Cart
</Text>
</div>
</div>
</div>

{/* checkout steps section */}
< CheckoutSteps />

{/* shopping cart details section */}
<div className="flex justify-center"> 
<div className="container-sm flex justify-center md:p-5">
<div className="flex w-full items-start gap-10 md:flex-col">
<div className="flex flex-1 flex-col gap-[38px] self-center md: self-stretch"> 
<div className="flex flex-col items-start justify-center gap-3.5">
<Heading size="text3x1" as="h1" className="!text-black-900_01">
Payment option
</Heading>
<div className="flex flex-col gap-4 self-stretch"> 
<Suspense fallback={<div>Loading feed...</div>}>
{paymentOptions.map((d, index) => (
<UserProfile3 {...d} key={"cardList" + index} />
))}
</Suspense>
</div>
</div>
<div className="flex flex-col items-start gap-4"> 
<Heading size="text3x1" as="h2" className="Itext-black-900_01">
Saved card
</Heading>
<div className="flex flex-col gap-6 self-stretch"> 
<CardDetails
cardImage="images/img_fi_ 14062982_1.svg"
cardName="HDFC Debit Card"
cardNumber="XX48"
cardExpiry="Exp : 03/22"
/>
<CardDetails
cardImage="images/img_fi_14062982_2.svg"
cardName="HDFC Debit Card"
cardNumber="XX48"
cardExpiry="Exp : 03/22"
/>
</div>
</div>
<div className="flex flex-col items-start gap-6">
<Heading size="text3xl" as="h3" className="!text-black-900_01">
Add new card
</Heading>
<div className="flex flex-col gap-4 self-stretch"> 
<SelectBox
size="md"
variant="fill"
shape="round"
indicator={
<Img
src="images/img_arrow _down_black_900_01.svg"
alt="Arrow Down"
className="h-[16px] w-[16px]"
/>
}
name="Card Type"
placeholder={ `Credit or debit card`}
options={dropDownOptions}
className="border border-solid border-blue_gray-100_01 Itext-gray-700"
/>
<div> 
<Input
size="lg"
type="number"
name="Card Number"
placeholder={`Card Number`}
className="rounded-tl-[16px] rounded-tr-[16px] border border-solid border-blue_gray-100_01"
/>
<div className="flex md: flex-col"> 
<Input
size="lg"
name="Expiration Date"
placeholder={`Expiration`}
className="w-full rounded-bl-[16px] border border-solid border-blue_gray-100_01"
/>
<Input
size="lg"
name="CVV"
placeholder={`CVV`}
className="w-full rounded-br-[16px] border-b border-r border-t border-solid border-blue_gray-100_01"
/>
</div>
</div>
<Input
size="lg"
type="number"
name="ZIP Code"
placeholder={`ZIP code`}
className="rounded - [16px] border border-solid border-blue_gray-100_01"
/>
<SelectBox
size="md"
variant="fill"
shape="round"
indicator={
<Img
src="images/img_arrow_down_black_900_01.svg"
alt="Arrow Down"
className="h- [16px] w-[16px]"
/>
}
name="County Dropdown"
placeholder={`County/region`}
options={dropDownOptions}
className="border border-solid border-blue_gray-100_01 Itext-gray-700"
/>
</div>
<div className="flex gap-[17px] self-stretch"> 
<a href= "https://www.youtube.com/embed/bv8FxkOsz7]" target="_blank">
<Button
color="deep_orange_A700"
size="2x1"
shape="round"
className="min-w-[136px] rounded-[26px] font-inter font-bold"
>
Save card
</Button>
</a>
<Button
size="2xl"
shape="round"
className="min-w-[136px] rounded-[26px] border border-solid border-black-900_02 font-inter font-medium"
> 
Cancel
</Button>
</div>
</div>
</div>
<div className="flex w-[38%] flex-col gap-9 rounded- [16px] border border-solid border-black-900_02 bg-gray-100 p-[22x] md:w-full sm:p-5">
<div className="flex flex-col gap-[22px]">
<div className="flex justify-between gap-5 sm:flex-col">
<div className="flex flex-col items-start gap-2">
<Heading size="heading2xl" as="h4"> 
Total
</Heading>
<Text as="p">Includes GST*</Text>
</div>
<div className="flex flex-1 flex-col items-end gap-2 sm: self-stretch">
<Heading size="heading2x]" as="h5">
26490.00
</Heading>
<div className="flex flex-wrap justify-end gap-[7px] self-stretch"> 
<Text as="p" className="line-through">
40990.00
</ Text>
<Text as="p" className="!font-medium !text-teal-400">
Save 14500.00
</Text>
</div>
</div>
</div>
<div className="h-px bg-gray -400_01" />
<div className="flex flex-col gap-5">
<div className="flex flex-col items-start justify-center gap-2.5">
<Heading as="h6">Price Breakup</Heading>
<div className="flex flex-col gap-1.5 self-stretch"> 
<div className="flex flex-wrap justify-between gap-5">
<Text as="p">Price (Inclusive of all taxes)</Text>
<Heading as="h6" >740990.00</Heading>
</div>
<div className="flex flex-wrap justify-between gap-5">
<Text as="p">Discount</Text>
<Heading as="h6" className="! text-teal-400">
-14500.00
</Heading>
</ div>
<div className="flex flex-wrap items-center justify-between gap-5">
<Text as="p">Shipping charges</Text>
<Heading as="h6" >*0.00</Heading>
</div>
</div>
</div>
<div className="h-px bg-gray-400_01" />
</div>
<div className="flex flex-col items-start justify-center gap-3">
<Heading as="h6">Order summary (1 item)</Heading>
<div className="flex flex-col gap-2 self-stretch">
<div className="flex items-start justify-center sm:flex-col">
<Text as="p" className="w-[82%] self-center leading-5 sm:w-full"> 
7kg Front load washing machine, Inverter Direct Drive, Middle Black
</Text>
<Heading as="h6" >*40990.00</Heading>
</div>
<div className="flex flex-wrap justify-between gap-5">
<Text as="p" className="!text-black-900_02">
Free Delivery: By Wed, Apr 24th
</Text>
<Heading as="h6" className="|text-black-900_02">
FREE
</Heading>
</div>
</div>
</div>
</div>
<div className="flex justify-center gap-4">
<a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank"> 
<Button
size="2x1"
shape="round"
className="min-w-[136px] rounded-[26px] border border-solid border-black-900_02 font-inter font-medium"
>
Back
</Button>
</a>
<a href="https://www.youtube.com/embed/bv8FxkOsz7[" target="_blank">
<Button
color="deep_orange_A700"
size="2xl"
shape="round"
className="min-w-[312px] rounded-[26px] font-inter font-bold"
>
Proceed to checkout
</Button>
</a>
</div>
</div>
</div>
</div>
</div>

{/* footer section */}
< Footer />
</div>
</>
);
}