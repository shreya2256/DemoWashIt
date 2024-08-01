import { Button, Text, Heading } from "../../components";
import React from "react";

export default function ProductdetailsRow() {
return (
<div>
{/* product title and purchase section */}
<div className="flex justify-center border-b border-solid border-gray-200 bg-gray-300_06 py-6 sm:py-5">
<div className="container-sm flex items-center justify-center md:flex-col md: p-5">
<Heading size="heading2x1" as="h1" className="w-[48%] leading-9 md:w-full">
7Kg Front Load Washing Machine, Inverter Direct Drive, Middle Black
</Heading>
<div className="flex flex-1 items-center justify-center gap-4 md:flex-col md: self-stretch">
<div className="flex flex-1 flex-col items-end gap-2 md: self-stretch"> 
<Heading size="headinglg" as="h2">
26490.00
</Heading>
<div className="flex justify-end gap-1.5 self-stretch sm:flex-col"> 
<div className="flex flex-1 flex-wrap items-center justify-end gap-2.5 sm:self-stretch">
<Text as="p">MRP(Inclusive of all taxes)</Text>
<Text as="p" className="line-through">
40990.00
</Text>
</div>
<Text as="p" className="! font-medium !text-teal-400">
Save 14500.00
</Text>
</div>
</ div>
<a href="https://www.youtube.com/embed/bv8Fxk0sz7]" target="_blank">
<Button color="deep_orange_A700" shape="round" className="min-w-[174px] font-inter font-bold">
Add To Basket
</Button>
</a>
</div>
</ div>
</div>
</div>
);
}