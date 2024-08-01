import { Button, Heading, Img, Text } from "./..";
import React from "react";

export default function ProductDetails6({
cancelMessage,
viewOrderDetails = "View order details",
productImage = "images/img_image_3_148x148. png",
productDescription = "LG 9kg 5 Star Fully Automatic Front Load Washing Machine (FHV1409Z4M. ABMQEIL, LG ThinQ with Wi-Fi, Middle Black)",
manufacturerDetails,
productColor,
productSize,
productQuantity,
buyItAgainButton = "Buy it again",
...props
}) { 
return (
<div
{... props}
className={`${props-className} flex flex-col gap-3.5 p-6 sm:p-5 border-gray-300_02 border border-solid bg-white-a700 flex-1 rounded- [16px] container-xs`}
> 
<div className="flex flex-col gap-4 self-stretch"> 
<div className="flex items-center justify-center sm:flex-col"> 
<Text
size="textxl"
as="p"
className="rounded-[24px] border border-solid border-blue_gray-100_01 px-6 pb-2 pt-3.5 !font-medium Itext-deep_orange-a700 sm: px-5"
> 
<span className="text-deep_orange-a700" >Cancel</span>
<span className="font-light text-deep_orange-a700">&nbsp;</span>
<span className="text-deep_orange-a700" >on Monday 4 May 2024</ span>
</Text>
<div className="flex flex-1 justify-end px-4 py-3 sm:self-stretch">
<Text as="p" className="self-end !font-inter !font-medium !text-black-900_02 underline">
{viewOrderDetails}
</Text>
</div>
</div>
<div className="h-px bg-gray-300_04" />
</ div>
<div className="flex items-center gap-4 self-stretch md: flex-col">
<Img src={productImage} alt="Product Image" className="h-[248px] w-[16%] rounded-md object-contain md:w-full" />
<div className="flex flex-1 flex-col items-start gap-4 md:self-stretch">
<div className="flex flex-col items-start justify-center gap-1.5 self-stretch"> 
<Heading as="h6" className="w-[68%] leading-6 md:w-full">
{productDescription}
</Heading>
<Heading size="texts" as="p" className=" !font-normal !text-gray-700">
<span className="text-gray-700" >MANUFACTURER DETAILS: &nbsp;</span>
<span className="font-medium text-gray-700">LG</span>
</Heading>
</div>
<div className="flex self-stretch">
<Heading size="headingxs" as="p" className=" !text-gray-600_01">
<span className="font-normal text-gray-600_01">Color:</span>
<span className="text-gray-600_01">&nbsp;&bsp;</span>
<span className="text-black-900">Black Caviar</span>
</Heading>
<div className="m1-4 h-[20px] w-px bg-gray-300_04" />
<Heading size="headingxs" as="p" className="m1-3.5 !text-gray-600_01">
<span className="font-normal text-gray-600_01">Size: &nbsp;</span>
<span className="text-black-900">11. 0kg</ span>
</Heading>
<div className="m1-4 h-[20px] w-px bg-gray-300_04" />
<Heading size="headingxs" as="p" className="m1-3.5 Itext-gray-600_01">
<span className="font-normal text-gray-600_01">Qty: </ span>
<span className="text-gray-600_01">&nbsp;&bsp;</ span>
<span className="text-black-900">1</ span>
</Heading>
</div>
<Button
size="md"
className="min-w-[174p×] rounded-[24px] border border-solid border-black-900_02 font-inter font-medium"
> 
{buyItAgainButton}
</Button>
</div>
</div>
</div>
);
}