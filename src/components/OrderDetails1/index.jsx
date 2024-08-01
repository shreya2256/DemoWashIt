import { Img, Text, Button, Heading } from "•/..";
import React from "react";

export default function OrderDetails1({ 
deliveredOnButton = "Delivered on on Monday 4 May 2024",
viewOrderDetailsText = "View order details",
downloadInvoiceButton = "Download invoice",
productDescription = "LG 9kg 5 Star Fully Automatic Front Load Washing Machine (FHV1409Z4M.ABMQEIL, LG ThinQ with Wi-Fi, Middle Black)",
manufacturerDetails,
colorDetails,
sizeDetails,
quantityDetails,
writeReviewButton = "Wirte review",
returnButton = "return",
returnPolicyText = "Returns are accepted until May 22.",
...props
}) {
return (
<div {...props} className={`${props.className} flex flex-col gap-3.5 p-6 sm:p-5 flex-1 container-xs`}>
<div className="flex flex-col gap-4 self-stretch" >
<div className="flex items-center justify-center md:flex-col">
<Button
color="blue_gray_100_01"
size="2x1"
variant="outline"
className="min-w-[374px] rounded-[24px] font-medium"
> 
{deliveredOnButton}
</Button>
<div className="flex flex-1 items-center justify-end gap-[18px] md:self-stretch">
<Text as="p" className="mb-3 self-end !font-inter |font-medium !text-black-900_02 underline">
{viewOrderDetailsText}
</Text>
<Button size="2x1" className="min-w-[170px] rounded-[26px] font-inter font-medium underline">
{downloadInvoiceButton}
</Button>
</div>
</div>
<div className="h-px bg-gray-300_04" />
</div>
<div className="flex items-center self-stretch md: flex-col"> 
<div className="flex flex-1 items-center gap-4 md:flex-col md: self-stretch"> 
<Img 
src="images/img_image_3_148x148.png"
alt="Product Image"
className="h-[248px] w-[18%] rounded-md object-contain md:w-full"
/>
<div className="flex flex-1 flex-col items-start gap-4 md:self-stretch">
<div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
<Heading as="h6" className="w-[84%] leading-6 md:w-full">
{productDescription}
</Heading>
<Heading size="texts" as="p" className=" !font-normal !text-gray-700">
<span className="text-gray-700">MANUFACTURER DETAILS:&nbsp;</span>
<span span className="font-medium text-gray-700">LG</span>
</Heading>
</div>
<div className="flex items-center self-stretch">
<Heading size="headingxs" as="p" className="! text-gray-600_01">
<span className="font-normal text-gray-600_01">Color:</span>
<span className="text-gray-600_01">&bsp; &nbsp; </span>
<span className="text-black-900" > Black Caviar</span>
</Heading>
<div className="flex gap-3.5">
< div className="h-[20px] w-px bg-gray-300_04" />
<Heading size="headingxs" as="p" className="!text-gray-600_01">
<span className="font-normal text-gray-600_01">Size: &nbsp;</ span>
<span className="text-black-900" >11. 0kg</span>
</Heading>
</div>
<div className="m1-3.5 h-[20px] w-px bg-gray-300_04" />
<Heading size="headingxs" as="p" className="m1-3.5 Itext-gray-600_01">
<span className="font-normal text-gray-600_01" >Qty: </span>
<span className="text-gray-600_01">&nbsp;&bsp;</span>
<span className="text-black-900" >1</span>
</Heading>
</div>
<div className="flex gap-4 self-stretch"> 
<Button
color="deep_orange_A700"
size="md"
className="min-w-[158px] rounded- [24px] font-inter font-semibold"
>
{writeReviewButton}
</Button>
<Button
size="md"
className="min-w-[174px] rounded-[24px] border border-solid border-blue_gray-100_01 font-inter font-medium"
>
{returnButton}
</Button>
</div>
<Text as="p" className=" ! font-medium" >
{returnPolicyText}
</ Text>
</div>
</div>
< Img
src="images/img_frame_48096755. svg"
alt=" Frame Image"
className="h- [174px] w-[16%] object-contain md:w-full"
/>
</div>
</div>
);
}