import { Button, Heading, Text, RatingBar, Img } from "../../components" ;
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function FeaturedProducts() { 
return (
<>
{/* featured products section */}
<div className="mt -[104px] self-stretch"> 
<Tabs
className="flex flex-col items-center"
selectedTabclassName=" |text-black-900_02 border-deep_orange-a700 border-b-2 border-solid"
selectedTabPanelClassName=" Irelative tab-panel--selected"
> 
<div className="container-sm flex flex-col gap-12 md:p-5">
<div className="flex flex-col items-start gap-2.5">
<Heading size="heading7x1" as="h2">
Picks For You
</Heading>
<TabList className="flex flex-wrap gap-[30px]">
<Tab className="p-2.5 text-[20px] font-normal tracking-[1.40px] text-black-900_02">Best Deal</Tab>
<Tab className="p-2.5 text-[20px] font-normal tracking-[1.40px] text-black-900_02">Most Popular</Tab>
<Tab className="p-2.5 text-[20px] font-normal tracking-[1.40px] text-black-900_02">Newest</Tab>
</TabList>
</div>
{[...Array(3)].map((_, index) => (
<TabPanel key={`tab-panel${index}`} className="absolute justify-center">
<div className="w-full">
<div className="flex gap-10 md: flex-col">
<div className="flex w-full flex-col gap-6 rounded-[30px] border border-solid border-gray-400_01 px-5 py-6 sm:py-5">
<Img
src="images/img_image_6_350x386.png"
alt="Product Image"
className="mt-3 h-[350px] object-cover"
/>
<div className="flex flex-col gap-[22px]"> 
<div className="flex flex-col gap-2">
<Heading size="text3x1" as="h3" className="leading-9">
5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model
</Heading>
<div className="flex items-center gap-2">
<RatingBar value={1} isEditable={true} size={18} className="flex gap-2.5" />
<Text as="p" className="|text-black-900">
3(122)
</Text>
</div>
</div>
<div className="flex flex-col items-start gap-2.5">
<div className="flex flex-wrap self-stretch">
<Text size="textxl" as="p">
MRP (Incl. of all taxes)
</Text>
<Text size="textxl" as="p" className="m1-1.5 line-through">
85990
</Text>
<Text size="textxl" as="p" className="m1-1.5 ltext-black-900_02">
46% off
</Text>
</div>
<Heading size="heading5x1" as="h4">
17,800
</Heading>
</div>
<div className="flex gap-3.5"> 
<a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank">
<Button
shape="round"
className="w-full border border-solid border-black-900_02 font-inter font-medium"
>
Learn More
</Button>
</a>
<Button color="deep_orange_A700" shape="round" className="w-full font-inter font-bold">
Shop Now
</Button>
</div>
</div>
</div>
<div className="flex w-full flex-col gap-6 rounded-[30px] border border-solid border-gray-400_01 px-5 py-6 sm:py-5">
<Img src="images/img_image_5-png" alt="Second Image" className="mt-3 h- [350px] object-cover" />
<div className="flex flex-col gap-[22px]"> 
<div className="flex flex-col gap-2">
<Heading size="text3x]" as="h5" className="leading-9">
650L, Convertible Side-by-Side Refrigerator with Smart Inverter Compressor, Smart Diagnosis
</Heading>
<div className="flex items-center gap-2">
<RatingBar value={1} isEditable={true} size={18} className="flex gap-2.5" />
<Text as="p" className=" |text-black-900">
3(122)
</Text>
</div>
</div>
<div className="flex flex-col items-start gap-2.5"> 
<div className="flex flex-wrap self-stretch"> 
<Text size="textxl" as="p">
MRP (Incl. of all taxes)
</Text>
<Text size="textxl" as="p" className="m1-1.5 line-through">
785990
</Text>
<Text size="textxl" as="p" className="ml-1.5 !text-black-900_02">
46% off
</Text>
</div>
<Heading size="heading5x1" as="h6">
17,800
</Heading>
</div>
<div className="flex gap-4">
<a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
<Button
shape="round"
className="w-full border border-solid border-black-900_02 font-inter font-medium"
>
Learn More
</Button>
</a>
<Button color="deep_orange_A700" shape="round" className="w-full font-inter font-bold">
Shop Now
</Button>
</div>
</div>
</div>
<div className="flex w-full flex-col gap-6 rounded-[30px] border border-solid border-gray-400_01 px-5 py-6 sm:py-5">
<Img src="images/img_image_3.png" alt="Third Image" className="mt-3 h-[350px] object-cover" />
<div className="flex flex-col gap-[22px]"> 
<div className="flex flex-col gap-2">
<Heading size="text3x1" as="p" className="leading-9">
7Kg Front Load Washing Machine, Inverter Direct Drive, Middle Black
</Heading>
<div className="flex items-center gap-2">
<RatingBar value={1} isEditable={true} size={18} className="flex gap-2.5"/>
<Text as="p" className="! text-black-900">
3(122)
</Text>
</div>
</div>
<div className="flex flex-col items-start gap-2.5">
<div className="flex flex-wrap self-stretch"> 
<Text size="textxl" as="p">
MRP (Incl. of all taxes)
</Text>
<Text size="textxl" as="p" className="ml-1.5 line-through">
85990
</Text>
<Text size="textxl" as="p" className="m1-1.5 !text-black-900_02">
46% Off
</Text>
</div>
<Heading size="heading5xl" as="h1">
17,800
</Heading>
</div>
<div className="flex gap-4"> 
<a href="https://www.youtube.com/embed/bv8Fxksz7I" target="_blank">
< Button
shape="round"
className="w-full border border-solid border-black-900_02 font-inter font-medium"
>
Learn More
</Button>
</a>
<Button color="deep_orange_A700" shape="round" className="w-full font-inter font-bold">
Shop Now
</Button>
</div>
</div>
</div>
</div>
</div>
</TabPanel>
))}
</div>
</Tabs>
</div>
</>
);
}