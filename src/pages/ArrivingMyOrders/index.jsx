import { Helmet } from "react-helmet";
import { SelectBox, Img, Text, ChipView, Button, Heading } from "../ ../components" ;
import Footer from "../ ../ components/Footer";
import Header from "../ ../ components/Header";
import OrderDetails from "../../ components/OrderDetails";
import BreadcrumbSection from "./BreadcrumbSection";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const dropDownOptions = [
{ label: "Option1", value: "option1" },
{ label: "Option2", value: "option?" },
{ label: "Option3", value: "optiona" },
];

export default function ArrivingMyOrdersPage() {
const [chipoptions, setchipoptions] = React. usestate(() => [
{ value: 1, label: `Personal Information`},
{ value: 2, label: `My Orders`},
{ value: 3, label: `Manage Address`},
{ value: 4, label: `Payment Method`},
]);
const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

return (
<>
<Helmet>
<title>Order Arrivals - Track Your TechVolt Orders</title>
<meta
name="description"
content="Stay updated with your incoming TechVolt orders. Track expected delivery dates, view order details, and manage cancellations for your"
/>
</Helmet>
<div className="flex w-full flex-col gap-9 bg-white-a700">
{/* header section */}
<div>
<Header />

{/* breadcrumb section */}
<BreadcrumbSection />
</div>

{/* account overview section */}
<div className="flex justify-center"> 
<div className="container-sm flex justify-center md:p-5">
<div className="flex w-full flex-col gap-10">
<div className="flex flex-col gap-9"> 
<div className="flex items-center justify-center sm:flex-col"> 
<div className="flex flex-1 flex-col items-start gap-1 sm:self-stretch">
<Heading size="heading7x]" as="h1">
My Account
</Heading>
<Text size="text2xl" as="p" className="tracking-[1.40px] |text-black-900_02">
Your Account, Your Way
</Text>
</div>
<a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank">
<Button
color="deep_orange_A700"
className="min-w-[112px] rounded-[16px] border border-solid border-blue gray -100_01" 
> 
Logout
</Button>
</a>
</div>
<ChipView
options={chipOptions}
setOptions={setChipOptions}
values={selectedChipOptions}
setValues={setSelectedChipOptions}
className="flex flex-wrap gap-4"
> 
{ (option) => (
<React.Fragment key={option.index}>
{option.isSelected ? (
<div
onClick={option.toggle}
className="flex h-[56px] min-w-[224px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-rounded-[16px] border border-solid border-black-900 02 bo-white-a700 px-7 text-center text-(16px] text-black-900 02 sm:px-5rounded- 16px) border border-solid border-black-900_02 bg-white-a700 px-7 text-center text-(16px) text-black-900 02 sm:px-5"
> 
<span>{option.label}</span>
</ div>
) : (
<div
onclick={option.toggle}
className="flex h-[56px] min-w-[224px] cursor-pointer flex-row items-center justify-center rounded Zoox border border-sold border-blue gray-lou u, be-unile-a/ou ox-/ text-center text 2opx text-gray-700 Sm:px-3"
> 
<span>{option.label}</span>
</ div>
)}
</React.Fragment>
)}
</ChipView>
</div>

{/* order tabs section */}
<Tabs
className="flex flex-col gap-6"
selectedTabclassName=" I text-black-900_02 border-deep_orange-a700 border-b-2 border-solid"
selectedTabPanelclassName="p-8 sm:p-5 !relative tab-panel--selected"
> 
<div className="flex items-center justify-between gap-5 md: flex-col">
<TabList className="flex flex-wrap gap-[30px]">
<Tab className="p-3 text-[20px] font-normal tracking-[1.40px] text-black-900 02">Arriving</Tab>
<Tab className="p-3 text-[20px] font-normal tracking-[1.40px] text-black-900_02">Delivered</Tab>
<Tab className="p-3 text-[20px] font-normal tracking-[1.40px] text-black-900_02">
Canceled & returned
</Tab>
</TabList>
<div className="flex w-[36%] items-center justify-end gap-2 md:w-full">
<Text size="text2x1" as="p" className="self-end !font-medium Itext-black-900_02">
Sort by:
</Text>
<SelectBox
size="xs"
variant="fill"
shape="round"
indicator={
< Img
src="images/ img_arrowdown_black_900_02_1.svg"
alt="Arrow Down"
className="h-[16px] w-[16px]"
/>
}
name="Sort Dropdown"
placeholder={`1 month`}
options={dropDownOptions}
className="w-[22%] border border-solid border-black-900_02 font-medium"
/>
</div>
</div>
{[...Array (3)].map((_, index) => (
<TabPanel key={`tab-panel${index}`} className="absolute justify-center p-8 sm:p-5">
{/* order list section */}
<div className="w-full">
<div className="flex flex-col gap-9">
<OrderDetails />
<OrderDetails />
</div>
</div>
</TabPanel>
))}
</Tabs>
</div>
</div>
</div>

{/* footer section */}
< Footer />
</ div>
</>
);
}