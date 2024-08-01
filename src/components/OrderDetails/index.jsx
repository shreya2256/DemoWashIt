import { Radio, Text, Button, Heading, Img } from "./..";
import React from "react";

export default function OrderDetails({
expectedDeliveryButton = "Expected delivery on Monday 16 May 2024",
viewOrderDetailsText = "View order details",
downloadInvoiceButton = "Download invoice",
productDescription = "LG 9kg 5 Star Fully Automatic Front Load Washing Machine (FHV1409Z4M. ABMQEIL, LG ThinQ with Wi-Fi, Middle Black)",
manufacturerDetails,
productColor,
productSize,
productQuantity,
buyItAgainButton = "Buy it again",
cancelButton ="Cancel",
cancellationPolicy = "Cancellation and returns are accepted until May 22.",
orderConfirmedText = "Confirmed",
outForDeliveryText = "Out for delivery",
...props
}) { 
return ( 
<div
{...props}
className={`${props.className} flex flex-col gap-3.5 p-6 sm:p-5 border-gray-300_02 border border-solid bg-white-a700 flex-1 rounded- [16px] container-xs` }
> 
<div className="flex flex-col gap-4 self-stretch"> 
<div className="flex items-center justify-center md: flex-col">
<Button
color="gray_300_06"
size="2x1"
className="min-w-[428px] rounded-[24px] font-medium !text-blue_gray-900"
>
{expectedDeliveryButton}
</Button >
<div className="flex flex-1 justify-center md:self-stretch"> 
<div className="flex flex-1 justify-end px-4 py-3">
<Text as="p" className="self-end |font-inter |font-medium !text-black-900_02 underline">
{viewOrderDetailsText}
</Text>
</div>
<Button size="2xl" className="min-w-[170px] rounded-[26px] font-inter font-medium underline">
{downloadInvoiceButton}
</Button>
</div>
</div>
<div className="h-px bg-gray-300_04" />
</div>
<div className="flex items-center gap-11 self-stretch md:flex-col">
<div className="flex flex-1 items-center gap-4 md:flex-col md: self-stretch">
< Img
src="images/img_image_3_148x148-png"
alt="Product Image"
className="h- [248px] w-[20%] rounded-md object-contain md:w-full"
/>
<div className="flex flex-1 flex-col items-start gap-4 md: self-stretch">
<div className="flex flex-col items-start justify-center gap-1.5 self-stretch"> 
<Heading as="h6" className="w-full leading-6">
{productDescription}
</Heading>
<Heading size="texts" as="p" className=" ! font-normal !text-gray-700">
<span className="text-gray-700" >MANUFACTURER DETAILS:&bsp;</ span>
<span className="font-medium text-gray-700" >LG</ span>
</Heading>
</div>
<div className="flex items-center self-stretch">
<div className="flex gap-4"> 
<Heading size="headingxs"as="p" className=" !text-gray-600_01">
< span className="font-normal text-gray-600_01">Color:</span>
<span className="text-gray-600_01">&nbsp;&bsp;</ span>
<span className="text-black-900">Black Caviar</span>
</Heading>
<div className="h- [20px] w-px bg-gray-300_04" />
</div>
<Heading size="headingxs" as="p" className="m1-3.5 !text-gray-600_01">
<span className="font-normal text-gray-600_01">Size: &nbsp;</span>
<span className="text-black-900" >11. 0kg</span>
</Heading>
<div className="flex flex-1 gap-[15px] px-4">
<div className="h- [20px] w-px bg-gray-300_04" />
<Heading size="headingxs" as="p" className=" !text-gray-600_01">
<span className="font-normal text-gray-600_01" >Qty: </span>
<span className="text-gray-600_01" >&nbsp;&bsp;</ span>
< span className="text-black-900" >1</ span>
</Heading>
</div>
</div>
<div className="flex gap-[17px] self-stretch">
<Button color="deep_orange_A700" size="md" className="min-w-[150px] rounded-[24px] font-inter font-bold">
{buyItAgainButton}
</Button>
<Button
size="md"
className="min-w- [174px] rounded-[24px] border border-solid border-blue_gray-100_01 font-inter font-medium"
>
{cancelButton}
</Button>
</ div>
<Text as="p" className=" ! font-medium" >
( cancellationPolicy)
</Text>
</div>
</div>
<div className="relative h-[174px] w-[16%] py-1 md:h-auto md:w-full">
<div className="ml-3 mt-3 h-[128px] w-[2px] bg-gray-300_05 md:m1-0" />
<div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-3">
<Radio
size="sm"
value="ordered"
name="orderplacedradio"
label="Ordered"
className="w-[58%] gap-4 text-[18px] font-medium text-gray-700"
/>
<div className="flex items-center gap-4 py-1">
<div className="flex w-[12%] flex-col items-center rounded- [10px] bg-white-a700 p-0.5">
<div className="h-[20px] w-[20px] rounded-[10px] bg-gray-700" />
</div>
<Text size="textxl" as="p" className="! font-medium" >
{orderConfirmedText}
</Text>
</div>
<div className="flex items-center gap-4">
<div className="flex w-[12%] flex-col items-center rounded- [12px] bg-white-a700 p-0.5">
<div className="h-[20px] w- [20px] rounded- [10px] bg-gray-500_02" />
</div>
<Text size="textxl" as="p" className=" !text-gray-500_02">
{outForDeliveryText}
</Text>
</div>
< Radio
size="md"
value="delivered"
name="deliveredstatusradio"
label="Delivered"
className="w- [62%] gap-4 text-[18px] text-gray-500_02"
/>
</div>
</div>
</div>
</div>
);
}
