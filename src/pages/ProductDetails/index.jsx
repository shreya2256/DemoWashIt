import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img, Input } from "../../components";
import FeatureList from "../../components/FeatureList";
import Footer from "../../components/Footer";
import ProductDetails1 from "../../components/ProductDetails1";
import ProductDimensionsAndWeights from "../../components/ProductDimensionsAndWeights";
import ProductSmartFeaturesSection from "./ProductSmartFeaturesSection";
import ProductdetailsBanner from "./ProductdetailsBanner";
import ProductdetailsColumnThree from "./ProductdetailsColumnThree";
import ProductdetailsRow from "./ProductdetailsRow";
import RecentlyViewedProductsSection from "./RecentlyViewedProductsSection";
import React, { Suspense } from "react";

const productDimensionsList = [
{
titleText: "DIMENSIONS & WEIGHTS",
productDimensionsLabel: "Product Dimensions (WxHxD mm)",
productDimensionsValue: "600 × 850 × 565",
weightLabel: "Weight (kg)",
weightValue: "59kg",
},
{
titleText: "MATERIAL & FINISH",
productDimensionsLabel: "Product Dimensions (WxHxD mm)",
productDimensionsValue: "600 × 850 × 565",
weightLabel: "Weight (kg)",
weightValue: "59kg",
},
{ 
titleText: "CAPACITY",
productDimensionsLabel: "Product Dimensions (WxHxD mm)",
productDimensionsValue: "600 × 850 × 565",
weightLabel: "Weight (kg)",
weightValue: "59kg",
},
{ 
titleText: "CONTROL & DISPLAY",
productDimensionsLabel: "Product Dimensions (WxHxD mm)",
productDimensionsValue: "600 × 850 × 565",
weightLabel: "Weight (kg)",
weightValue: "59kg",
},
];
const emiOptionslist = [
{
noCostEmiText: "No Cost EMI starts from * 7065.42/ month.",
standardEmiText: "Standard EMI starts from ? 2569.79/ month.",
debitCardEmiText: "EMI also available on Debit cards",
learnMoreLink: "Learn more",
},
{ 
noCostEmiText: "No Cost EMI starts from & 7065.42/ month.",
standardEmiText: "Standard EMI starts from  2569.79/ month.",
debitCardEmiText: "EMI also available on Debit cards",
learnMoreLink: "Learn more",
},
{ 
noCostEmiText: "No Cost EMI starts from & 7065.42/ month.",
standardEmiText: "Standard EMI starts from 7 2569.79/ month.",
debitCardEmiText: "EMI also available on Debit cards",
LearnMoreLink: "Learn more",
},
];
const featureAvailabilityList = [
{ 
motionFeatureText: "6 Motion DD",
motionFeatureStatus: "Yes",
aiFeatureText: "AI DD",
aiFeatureStatus: "Yes",
cycleEndFeatureText: "End of Cycle Signal",
cycleEndFeatureStatus: "Yes",
addItemFeatureText: "Add Item",
addItemFeatureStatus: "Yes",
},
{ 
motionFeatureText: "Auto Restart",
motionFeatureStatus: "Yes",
aiFeatureText: "Inverter DirectDrive",
aiFeatureStatus: "Yes",
cycleEndFeatureText: "Foam detection system",
cycleEndFeatureStatus: "Yes",
addItemFeatureText: "LoadSense",
addItemFeatureStatus: "Yes",
},
{ 
motionFeatureText: "Steam+",
motionFeatureStatus: "Yes",
aiFeatureText: "Leveling Legs",
aiFeatureStatus: "Yes",
cycleEndFeatureText: "Stainless Steel Drum",
cycleEndFeatureStatus: "Yes",
addTtemFeatureText: "TurboWash360*",
addItemFeatureStatus: "Yes",
},
{ 
motionFeatureText: "Vibration Sensor",
motionFeatureStatus: "Yes",
aiFeatureText: "Drum Lifter",
aiFeatureStatus: "Stainless Steel Slim Lifter",
cycleEndFeatureText: "Water feed (Hot / Cold)",
cycleEndFeatureStatus: "Cold Only",
addItemFeatureText: "Water Level",
addItemFeatureStatus: "Auto",
},
];

export default function ProductDetailsPage() { 
const [quantity, setQuantity] = React.useState(1);

return (
<> 
<Helmet>
<title>Front Load Washing Machine Details | TechVolt</title>
<meta
name="description"
content="Get the 7Kg Front Load Washing Machine with Inverter Direct Drive. Enjoy energy efficiency, smart technology, and a comprehensive warranty."
/>
</Helmet>
<div className="w-full bg-white-a700">
<div className="flex flex-col items-center">
<div className="self-stretch">
<header>
{/* header navigation section */}
<div className="flex justify-center border-b border-solid border-gray-200 bg-white-a700 py-10 sm: py-5">
<div className="container-sm flex items-center justify-between gap-5 md:flex-col md:p-5">
<Img
src="images/img_header_logo-png"
alt="Header Logo"
className="h- [50px] w-[222px] object-contain"
/>
<div className="flex">
<ul className="flex flex-wrap items-center gap-[30px]"> 
<li>
<a href="#" className="border-b-2 border-solid border-deep_orange-a700">
<Text size="text2x1" as="p" className="p-2.5 tracking-[1.40px] !text-black-900_02">
Home
</Text>
</a>
</li>
<li>
<a href="#" className="mb-2">
<Text size="text2xl" as="p" className="p-2.5 tracking-[1.40px] !text-black-900_02">
Shop
</Text>
</a>
</li>
<li>
<a href="#">
<Text size="text2xl" as="p" className="p-2.5 tracking-[1.40px] !text-black-900_02">
Accessories
</Text>
</a>
</li>
<li>
<a href="#">
<Text size="text2x1" as="p" className="p-2.5 tracking-[1.40px] !text-black-900_02">
About Us
</Text>
</a>
</li>
<li>
<a href="#">
<Text size="text2xl" as="p" className="p-2.5 tracking-[1.40px] !text-black-900_02">
Contact Us
</Text>
</a>
</li>
</ul>
</div>
<div className="flex w-[12%] justify-between gap-5 md:w-full">
<a href="#">
<Img src="images/img_search.svg" alt="Search Icon" className="h-[32px] w-[32px]" />
</a>
<a href="#">
<Img src="images/img_bag-svg" alt="Bag Icon" className="h-[32px] w-[32px]" />
</a>
<a href="#">
<Img src="images/img_lock.svg" alt="Lock Icon" className="h-[32px] w-[32px]" />
</a>
</ div>
</div>
</div>

{/* breadcrumb navigation section */}
<div className="flex justify-center border-b border-solid border-gray-200 bg-white-a700 py-3">
<div className="container-sm flex items-start md:p-5">
<Text size="textxl" as="p" className="self-center capitalize">
Home
</Text>
<Img
src="images/img_arrow_right_gray_700.svg"
alt="Breadcrumb Divider"
className="m1-1.5 h-[24px] w-[24px]"
/>
<Text size="textxl" as="p" className="ml-1.5 self-end !font-medium capitalize">
Shop
</Text>
<Img
src="images/img_arrow_right_gray_700.svg"
alt="Breadcrumb Divider"
className="ml-1.5 h-[24px] w-[24px]"
/>
<Text size="textxl" as="p" className="ml-1.5 self-center !font-medium capitalize Itext-black-900_02">
Product Details
</Text>
</div>
</div>
</header>
<ProductdetailsRow />
</div>

{/* product images and details section */}
<div className="mt-10 flex flex-col items-center self-stretch">
<div className="container-sm md: p-5">
<div className="flex items-start gap-10 md: flex-col">
<div className="flex w-full flex-col gap-4"> 
<Img src="images/img_image_3-png" alt="Main Image" className="h- [656px] object-cover" />
<div className="flex gap-5 md: flex-col">
<Suspense fallback={<div>Loading feed...</div>}>
{[...Array(4)].map((d, index) => (
<Img
key={"imageList" + index}
src="images/img_image_3_148x148.png"
alt="List Image 1"
className="h-[148px] w-[22%] rounded-md object-contain md:w-full"
/>
))}
</Suspense>
</div>
</div>
<div className="flex w-full flex-col gap-[42px] self-center"> 
<div className="flex flex-col gap-[42px]"> 
<div className="flex flex-col items-center gap-6"> 
<div className="flex items-start justify-center gap-6 self-stretch md: flex-col"> 
<Heading size="heading2x1" as="h2" className="w-[92%] self-center leading-9 md:w-full">
7Kg Front Load Washing Machine, Inverter Direct Drive, Middle Black
</Heading>
<a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
<Button
size="xl"
shape="circle"
className="w- [52px] rounded-[26px] border border-solid border-gray-400_01"
>
<Img src="images/img_favorite.svg" />
</Button>
</a>
</div>
<Text as="p" className="leading-6 !text-black-900_02">
<>
No Cost EMI starts from  7065.42/ month.
<br />
Auto Dispenser
<br />
AI Wash
<br />
AI EcoBubble
</>
</Text>
</div>
<div className="flex flex-col items-start justify-center gap-3"> 
<Heading size="headingx]" as="h3">
Choose body colour
</Heading>
<div className="flex flex-col items-start gap-4 self-stretch"> 
<Heading size="headingxs" as="h4" className="! text-black-900_02">
<span className="text-black-900_02">Colour : &nbsp;</span>
<span className="font-normal text-black-900_02">Black Caviar</span>
</Heading>
<div className="flex gap-4 self-stretch">
<div className="flex w-[6%] flex-col items-center rounded-[24px] border border-solid border-black-900 p-0.5">
<div className="h-[44px] w-[44px] rounded-[22px] border border-solid border-blue_gray-100 bg-black-900_02" />
</div>
<Img src="images/img_inbox.svg" alt="Inbox Image" className="h-[48px] w-[48px]" />
</div>
</div>
</div>
<div className="flex flex-col items-start gap-4"> 
<Heading size="headingx]" as="h5">
Choose washer/dryer capacity
</Heading>
<div className="flex gap-4 self-stretch md:flex-col"> 
<Button
color="gray_300_06"
shape="round"
className="w-full border border-solid border-black-900_02 font-inter font-semibold"
>
11.0kg
</Button>
<Button shape="round" className="w-full border border-solid border-black-900_02 font-inter">
11.0kg
</Button>
<Button shape="round" className="w-full border border-solid border-black-900 02 font-inter">
8.0kg
</Button>
</div>
</div>
</div>
<div className="flex flex-col items-start gap-4">
<Heading size="headingx]" as="h6">
Choose door/lid colour
</Heading>
<div className="flex gap-4 self-stretch" >
<Button
color="gray_300_06"
shape="round"
className="min-w-[210px] border border-solid border-black-900_02 font-inter font-semibold"
>
Black
</Button>
<Button
shape="round"
className="min-w-[210px] border border-solid border-black-900_02 font-inter"
>
Blue
</Button>
</div>
</div>
<div className="flex flex-col items-start justify-center gap-3.5">
<Heading size="headingxl" as="h5">
Delivery Details
</Heading>
<div className="flex items-center gap-4 self-stretch md: flex-col"> 
<Input
color="black_900_02"
size="sm"
variant="outline"
shape="square"
type="number"
name="Pincode Input"
placeholder={`Enter PinCode`}
className="flex-grow self-end md: self-auto"
/>
<Button
color="black_900_02"
size="md"
className="min-w-[164px] rounded-[24px] border border-solid border-black-900_02 font-inter font-medium"
>
Apply
</Button>
</div>
</div>
<div className="flex flex-col items-start gap-4">
<Heading size="headingxl" as="h5">
Offers
</Heading>
<div className="flex flex-col gap-4 self-stretch"> 
<Suspense fallback={<div>Loading feed...</div>}>
{emiOptionsList.map((d, index) => (
<ProductDetails1 {...d} key={"listOffers"+ index} />
))}
</Suspense>
</ div>
</div>
<div className="h-px bg-gray-300_04" />
<div className="flex flex-col gap-3"> 
<div className="flex items-center gap-2.5">
<Text size="textxl" as="p" className=" !font-medium !text-black-900_02">
Manufacturer&#39;s Information
</Text>
<Img src="images/img_frame.svg" alt="Manufacturer Image" className="h-[24px] w-[24px] self-end" />
</div>
<div className="flex flex-col items-start gap-1"> 
<Text size="textxl" as="p" className=" !font-medium !text-black-900_02">
Cancellation & Replacement Policy
</Text>
<div className="flex flex-col items-start gap-1 self-stretch"> 
<Text size="textxs" as="p" className="flex"> 
<span className="text-gray-700" >
Cancel order up to 60 mins. from order confirmation.&bsp;
</span>
<a href="#" className="text-deep _orange-a700 underline"> 
Know more
</a>
<span className=" text-deep_orange-a700">.</span>
</ Text>
<Text size="textxs" as="p" className="flex">
<span className="text-gray-700">
Replacement if found damaged/defective on delivery -&nbsp;
</span>
<a href="#" className="text-deep_orange-a700 underline">
Know more
</a>
<span className="text-deep_orange-a700">.</span>
</Text>
</div>
</div>
<div className="flex flex-col items-start gap-3.5">
<div className="flex flex-col items-start gap-1.5 self-stretch"> 
<Text size="textxl" as="p" className="! font-medium !text-black-900_02">
Warranty Policy
</Text>
<Text size="textxs" as="p" className="flex"> 
<span className="text-gray-700">
2 Years comprehensive warranty on product, 20 Years warranty on Digital Inverter
Motor.&bsp;
</ span>
<a href="#" className="text-deep_orange-a700 underline">
Know more
</a>
< span className="text-deep_orange-a700">. </ span>
</Text>
</div>
<a href="#"> 
<Text as="p" className="! font-medium !text-black-900_02 underline">
Learn more
</Text> 
</a>
</div>
</div>
<div className="flex flex-col gap-[38px] rounded-[16px] border border-solid border-black-900_02 bg-gray-100 p-6 sm:p-5">
<div className="flex flex-col gap-5">
<div className="flex flex-col gap-1.5">
<Heading size="headinglg" as="h5" className="leading-[30px]">
7Kg Front Load Washing Machine, Inverter Direct Drive, Middle Black
</Heading>
<div className="flex justify-center">
<div className="flex items-center gap-4">
<Text as="p">Black Caviar</Text>
<div className="h-[20px] w-px bg-black-900" />
</div>
<Text as="p" className="m1-3.5">
11.0 kg
</Text>
<div className="flex flex-1 items-center gap-[15px] px-4">
<div className="h-[20px] w-px self-start bg-black-900" />
<Text as="p">Black</Text>
</div>
</div>
</div>
<div className="h-px bg-gray-400_01" />
<div className="flex flex-col items-start gap-2">
<Heading size="heading2x1" as="h4" className=" |text-black-900_02">
726490.00
</Heading>
<div className="flex gap-[7px] self-stretch sm:flex-col"> 
<div className="flex flex-wrap items-center gap-2">
<Text as="p">MRP (Inclusive of all taxes)</Text>
<Text as="p" className="line-through" >
440990.00
</Text>
</div>
<Text as="p" className="! font-medium !text-teal-400">
Save 14500.00
</Text>
</div>
</div>
</ div>
<div className="flex justify-center gap-10 md:flex-col"> 
<div className="flex w-[30%] items-center justify-between gap-5 rounded-[24px] border border-solid border-gray-400_01 bg-white-a700 px-5 py-3 md:w-full">
<div 
onClick={(event) => {
event.stopPropagation();
setQuantity((quantity) => (quantity < 1 ? 0 : quantity - 1));
}}
className ="flex cursor-pointer flex-col"
>
<Img src="images/img_arrow_down.svg" alt="Decrement Icon" className="h-[20px]" />
</ div>
<Heading as="h6" className="!text-black-900_02">
{quantity}
</Heading>
<Img src="images/img_plus.svg" alt="Increment Icon" className="h-[20px] w-[20px]" />
</div>
<a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank"> 
< Button
color="deep orange A700"
size="2x1"
shape="round"
className="min-w-[404px] rounded-[26px] font-inter font-bold"
>
Add To Basket
</Button>
</a> 
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-10 h-px w-full self-stretch bg-gray-300_04" />

{/* product specifications section */}
<div className="container-sm mt-[70px] md:p-5">
<div className="flex flex-col items-start gap-5">
<Heading size="heading7x]" as="h2">
All Spec
</Heading>
<div className="flex flex-col gap-[38px] self-stretch">
<div className="flex flex-col gap-10"> 
<Suspense fallback={<div>Loading feed...</div>}>
{productDimensionsList.map((d, index) => (
<ProductDimensionsAndWeights {...d} key={"dimensionsList" + index} />
))}
</Suspense>
</div>
<div className="flex flex-col gap-[22px]"> 
<div className="flex flex-col items-start gap-2.5">
<Heading size="text3x]" as="h3">
FEATURES
</Heading>
<div className="h-px w-full self-stretch bg-gray-300_04" />
</div>
< div className="flex flex-col gap-2.5">
<div className="flex flex-col gap-3">
<Suspense fallback={<div>Loading feed...</div>}>
{featureAvailabilityList.map((d, index) => (
<FeatureList {...d} key={"motionList" + index} />
))}
</Suspense>
</div>
<div className="flex flex-col items-start justify-center gap-2">
<Text size="textxs" as="p">
TurboWash
</Text>
<Text as="p" className="|text-black-900_02">
Yes
</Text>
</div>
</div>
</div>
</div>
</div>
</div>

{/* product smart features section */}
<ProductSmartFeaturesSection />
</div>

{/* product additional features section */}
<div className="flex flex-col gap-[92px] md:gap-[69px] sm:gap-[46px]">
<ProductdetailsBanner />
< ProductdetailsColumnThree />
</div>

{/* recently viewed products section */}
< RecentlyViewedProductsSection />

{/* footer section */}
<Footer className="mt-20" />
</div>
</>
);
}