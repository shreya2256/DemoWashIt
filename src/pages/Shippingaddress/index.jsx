import { Helmet } from "react-helmet";
import { Button, Heading, Text, TextArea, Input, SelectBox, Img, ChipView } from  "../ ../components";
import Footer from "../ ../ components/Footer";
import Header from "../ ../ components/Header";
import Checkoutsteps from "./CheckoutSteps";
import RecentlyViewedProducts from " ./RecentlyViewedProducts";
import metadata from "libphonenumber-js/metadata.full.json";
import React from "react";

const dropDownOptions = [
{ label: "Option1", value: "option1" },
{ label: "Option2", value: "option2" },
{ label: "Option3", value: "optiona" },
];

export default function ShippingaddressPage() {
const [chipoptions, setChipoptions] = React.useState(() => [
{value: 1, label: `Home`},
{value: 2, label: `office`},
{ value: 3, label: `Other` },
]);
const [selectedchipoptions, setselectedchipoptions] = React.useState([]);
const countryoptions = React.useMemo(() => { 
return object.entries(metadata.countries).map(([code, data]) => {
const callingCode = `${data[0]}${parseInt(data[10]) || ""}` ;

const display = {
code,
callingCode: `+${callingCode}`,
imgSrc: `https://catamphetamine.github.io/country-flag-icons/3x2/${code}.svg`,
};

return { 
value: callingCode,
label: (
<>
<Img src={display.imgSrc} alt="Country Flag" className="ml-2.5 h-[24px] w-[24px]" />
</>
),
};
});
}, []);

return ( 
<>
<Helmet >
<title>Enter Shipping Address | TechVolt Electronics</title>
<meta
name="description"
content="Provide your shipping details to ensure a smooth delivery of your TechVolt purchases, from high-tech washing machines to innovative home appliances"
/>
</Helmet>
<div className="w-full bg-white-a700">
{/* main header section */}
<div>
<Header />

{/* breadcrumb navigation section */}
<div className="flex justify-center border-b border-solid border-gray-200 bg-white-a700 py-3">
<div className="container-sm flex items-center gap-1.5 md:p-5 sm: flex-col">
<Text size="textxl" as="p" className="capitalize"> 
Home
</Text>
< Img
src="images/img_ arrow_right_gray_700.svg"
alt="Arrow Icon"
className="h-[24px] w-[24px] self-start sm:w-full sm:self-auto"
/>
<Text size="textxl" as="p" className="!font-medium capitalize">
Product Details
</Text>
<Img
src="images/img_arrow_right_gray_700.svg"
alt="Arrow Icon"
className="h-[24px] w-[24px] self-start sm:w-full sm:self-auto"
/>
<Text size="textx1" as="p" className="!font-medium capitalize !text-black-900_02">
Shopping Cart
</ Text>
</div>
</div>
</div>

{/* checkout steps section */}
< Checkoutsteps />

{/* shipping address form section */}
<div className="mt-10 flex justify-center">
<div className="container-sm flex justify-center md:p-5">
<div className="flex w-full items-start gap-10 md:flex-col">
<div className="flex flex-1 flex-col items-start justify-center gap-5 self-center md:self-stretch">
<Heading size="text3xl" as="h1" className=" |text-black-900_01"> 
Shipping address
</Heading>
<div className="flex flex-col items-start gap-6 self-stretch"> 
<div className="flex flex-col gap-[22px] self-stretch"> 
<div className="flex flex-col gap-2">
<div className="flex">
<Text as="p" className="!text-black-900">
<span className="text-black-900">Address Type</span>
<span className="text-deep_orange-a700">*</ span>
</Text>
</div>
<ChipView
options={chipOptions}
setOptions={setChipOptions}
values={selectedChipOptions}
setValues={setSelectedChipoptions}
className="flex flex-wrap gap-4"
> 
{(option) => (
<React.Fragment key={option.index}>
{option.isSelected ? (
<div
onClick={option.toggle}
className="flex h-[48px] min-w-[98px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[24px] border border-solid border-black-900_02 px-(26x) text-center font-Inter text-[16px) font-semibold text-black-900_02 sm:px-5"
> 
<span> {option. label}</span>
</div>
) : (
<div
onClick={option.toggle}
className="flex h-[48px] min-w-[98px] cursor-pointer flex-row items-center justify-center rounded-[24px] border border-solid border-blue gray-100 01 bg-white-a700 px- 26px) text-center font-Inter text- 16px) font-senibold text-black-900 02 sa:px-5"
> 
<span> {option.label}</span>
</div>
)}
</React.Fragment>
)}
</ChipView>
</div>
<div className="flex flex-col gap-[22px]"> 
<div className="flex gap-6 md: flex-col">
<div className="flex w-full flex-col items-start justify-center gap-1.5">
<Text as="p" className=" !text-black-900">
<span className="text-black-900" >Name</ span>
<span className="text-deep_orange-a700">*</ span>
</Text>
<Input
color="blue_gray_100_01"
variant="outline" 
shape="round"
type="text"
name="Name Input"
placeholder={`Enter name`}
className="self-stretch"
/>
</div>
<div className="flex w-full flex-col items-start gap-2">
<Text as="p" className=" !text-black-900">
<span className="text-black-900">Email</span>
<span className="text-deep_orange-a700">*</span>
</Text>
<Input
color="blue_gray_100_01"
variant="outline"
shape="round"
type="email"
name="Email Input"
placeholder={`Enter email`}
className="self-stretch"
/>
</div>
</div>
<div className="flex gap-6 md: flex-col">
<div className="flex w-full flex-col items-start justify-center gap-1.5">
<Text as="p" className="!text-black-900">
<span className="text-black-900" > Phone</ span>
<span className="text-deep_orange-a700">*</ span>
</Text>
<div className="flex h-(48px) 1tems-center Justify-center self-stretch rounded- 240x) border border-solid border-blue gray-100 01 px-1"> 
<SelectBox
options={countryoptions}
defaultValue={countryOptions. find ((option) => option.value === "91")}
className="h-[24px] items-center justify-center"
indicator={ 
<Img
src="images/img_arrow _down_black_900_01.svg"
alt="Dropdown Arrow"
className="m1-2 h-[16px] w-[16px]"
/>
}
/>
<div className="ml-2 h-[24px] w-px bg-gray-500_01" />
<input
type="tel"
name="PhoneNumber Input"
placeholder="Enter phone number"
className="m1-3.5 flex h-[20px] flex-grow items-center justify-center pr-[34px] text-[14px] text-gray-700 sm:pr -5"
/>
</div>
</ div>
<div className="flex w-full flex-col items-start gap-2">
<Text as="p" className=" Itext-black-900">
<span className="text-black-900">Province/State</ span>
<span className="text-deep_orange-a700">*</ span>
</Text>
< SelectBox
color="blue_gray_100_01"
indicator={
< Img
src="images/img_ arrow_down_black_900_01.svg"
alt="Arrow Down"
className="h-[16px] w-[16px]"
/>
}
name="state Dropdown"
placeholder={`Select state`}
options={dropDownOptions}
className="self-stretch rounded-[24px] p1-4"
/>
</div>
</div>
<div className="flex gap-6 md:flex-col">
<div className="flex w-full flex-col items-start justify-center gap-1.5">
<Text as="p" className=" !text-black-900">
<span className="text-black-900" >Zip code</ span>
<span className="text-deep_orange-a700">*</ span>
</Text>
<Input
color="blue_gray_100_01"
variant="outline"
shape="round"
type="number"
name="Zip Code Input"
placeholder={`Enter Zip code`}
className="self-stretch"
/>
</div>
<div className="flex w-full flex-col items-start justify-center gap-1.5">
<Text as="p" className="!text-black-900"> 
<span className="text-black-900">City</ span>
<span className="text-deep_orange-a700">*</ span>
</Text>
< Input
color="blue_gray_100_01"
variant="outline"
shape="round"
name="City Input"
placeholder={`City`}
className="self-stretch"
/>
</div>
</div>
</div>
<div className="flex flex-col items-start justify-center gap-1.5">
<Text as="p" className="!text-black-900"> 
<span className="text-black-900">Address</span>
<span className="text-deep_orange-a700">*</ span>
</Text>
<TextArea
shape="round"
name="Address TextArea"
placeholder={`Building name / street name`}
className="self-stretch Iborder-blue_gray-100_01 text-gray-700"
/>
</div>
</div>
<Button
shape="round"
className="min-w-[164px] border border-solid border-black-900_02 font-inter font-medium"
>
Save address
</Button>
</div>
</ div>
<div className="w- [38%] md:w-full"> 
<div className="flex flex-col gap-9 rounded-[16px] border border-solid border-black-900_02 bg-gray-100 p-[22px] sm:p-5">
<div className="flex flex-col gap-[22px]"> 
<div className="flex flex-col gap-[22px]"> 
<div className="flex justify-between gap-5 sm: flex-col">
<div className="flex flex-col items-start gap 2"> 
<Heading size="heading2xl" as="h2">
Total
</Heading>
<Text as="p">Includes GST*</Text>
</div>
<div className="flex flex-1 flex-col items-end gap-2 sm:self-stretch"> 
<Heading size="heading2x1" as="h3">
226490.00
</Heading>
<div className="flex flex-wrap justify-end gap-[7px] self-stretch"> 
<Text as="p" className="line-through">
140990.00
</Text>
<Text as="p" className="! font-medium !text-teal-400">
Save 14500.00
</ Text>
</div>
</div>
</div>
<div className="h-px bg-gray-400_01" />
</div>
<div className="flex flex-col gap-5">
<div className="flex flex-col items-start justify-center gap-2.5">
<Heading as="h4">Price Breakup</Heading>
<div className="flex flex-col gap-1.5 self-stretch">
<div className="flex flex-wrap justify-between gap-5">
<Text as="p">Price (Inclusive of all taxes)</Text>
<Heading as="h5">*40990.00</Heading>
</div>
<div className="flex flex-wrap justify-between gap-5"> 
<Text as="p">Discount</Text>
<Heading as="h6" className="!text-teal-400" >
-14500.00
</Heading>
</ div>
<div className="flex flex-wrap items-center justify-between gap-5">
<Text as="p">Shipping charges</Text>
<Heading as="h6" >70.00</Heading>
</div>
</div>
</div>
<div className="h-px bg-gray-400_01" />
</div>
<div className="flex flex-col items-start justify-center gap-3">
<Heading as="h6">Order summary (1 item) </Heading>
<div className="flex flex-col gap-2 self-stretch">
<div className="flex items-start justify-center sm:flex-col"> 
<Text as="p" className="w-[82%] self-center leading-5 sm:w-full">
7Kg Front Load Washing Machine, Inverter Direct Drive, Middle Black
</Text>
<Heading as="h6" >*40990.00</Heading>
</ div>
<div className="flex flex-wrap justify-between gap-5">
<Text as="p" className="Itext-black-900_02">
Free Delivery: By Wed, Apr 24th
</ Text>
<Heading as="h6" className="Itext-black-900_02">
FREE
</Heading>
</div>
</div>
</div>
</div>
<div className="flex justify-center gap-4">
<a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank">
<Button
size="2xl"
shape="round"
className="min-w-[136px] Irounded-[26px] border border-solid border-black-900_02 font-inter font-medium"
>
Back
</Button>
</a>
<a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank">
<Button
color="deep_orange_A700"
size="2xl"
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

{/* recently viewed products section */}
< RecentlyViewedProducts />

{/* footer section */}
<Footer className="mt-20" />
</div>
</>
);
}