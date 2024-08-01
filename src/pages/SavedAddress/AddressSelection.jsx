import { Button, Heading, Text } from "../../components";
import UserProfilel from "../../components/UserProfile1";
import React from "react";

export default function AddressSelection() {
return (
<>
{/* address selection section */}
<div className="mt - [38px] flex justify-center"> 
<div className="container-sm flex items-start justify-center gap-10 md: flex-col md: p-5">
<div className="flex flex-1 flex-col items-start gap-6 md: self-stretch"> 
<Heading size="text3x1" as="h1" className="!text-black-900_01">
Saved Address
</Heading>
<div className="flex gap-6 self-stretch md: flex-col"> 
<UserProfilel className="border-black-900_02" />
<UserProfile1
userImage="images/ img_frame_black_900_02.svg"
userName="Leo Cooper"
homeButton="Office"
editText="Edit"
addressLabel="Address"
addressText="2118 Thornridge Cir. Syracuse, Connecticut 356242118 Thornridge Cir. "
phoneLabel="Phone"
phoneNumber=" +91 7368648767"
className="border-blue_gray-100_01"
/>
</div>
<a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank">
<Button
shape="round"
className="min-w-[196px] border border-solid border-black-900_02 font-inter font-medium"
>
Add new address
</Button>
</a>
</div>
<div className="flex w-[38%] flex-col gap-9 self-center rounded- [16px] border border-solid border-black-900_02 bg-gray-100 p-[22px] md:w-full sm:p-5">
<div className="flex flex-col gap-[22px]"> 
<div className="flex flex-col gap-[22px]">
<div className="flex justify-between gap-5 sm:flex-col">
<div className="flex flex-col items-start gap-2">
<Heading size="heading2x1" as="h2"> 
Total
</Heading>
<Text as="p">Includes GST*</Text>
</div>
<div className="flex flex-1 flex-col items-end gap-2 sm:self-stretch"> 
<Heading size="heading2x1" as="h3">
26490.00
</Heading>
<div className="flex flex-wrap justify-end gap-[7px] self-stretch"> 
<Text as="p" className="line-through">
40990.00
</Text>
<Text as="p" className="!font-medium Itext-teal-400">
Save 14500.00
</Text>
</div>
</div>
</div>
<div className="h-px bg-gray -400_01" />
</div>
<div className="flex flex-col items-start justify-center gap-2.5">
<Heading as="h4">Price Breakup</Heading>
<div className="flex flex-col gap-1.5 self-stretch"> 
<div className="flex flex-wrap justify-between gap-5">
<Text as="p">Price (Inclusive of all taxes)</Text>
<Heading as="h5">*40990.00</Heading>
</div>
<div className="flex flex-wrap justify-between gap-5">
<Text as="p">Discount</Text>
<Heading as="h6" className=" ! text-teal-400">
-14500.00
</Heading>
</div>
<div className="flex flex-wrap items-center justify-between gap-5">
<Text as="p">Shipping charges</Text>
<Heading as="h6" > 70.00</Heading>
</div>
</div>
</ div>
<div className="flex flex-col gap-[22px]" >
<div className="h-px bg-gray-400_01" />
<div className="flex flex-col items-start justify-center gap-3"> 
<Heading as="h6">Order summary (1 item)</Heading>
<div className="flex flex-col gap-2 self-stretch"> 
<div className="flex items-start justify-center sm:flex-col">
<Text as="p" className="w-[82%] self-center leading-5 sm:w-full">
7Kg Front Load Washing Machine, Inverter Direct Drive, Middle Black
</Text>
< Heading as="h6">*40990.00</Heading>
</div>
<div className="flex flex-wrap justify-between gap-5">
<Text as="p" className="|text-black-900_02">
Free Delivery: By Wed, Apr 24th
</Text>
<Heading as="h6" className="!text-black-900_02">
FREE
</Heading>
</div>
</ div>
</div>
</ div>
</ div>
<div className="flex justify-center gap-4">
<a href= "https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank">
<Button
size="2xl"
shape="round"
className="min-w- [136px] rounded-[26px] border border-solid border-black-900_02 font-inter font-medium"
>
Back
</Button>
</a>
<a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank">
<Button
color="deep_orange_A700"
size="2x1"
shape="round"
className="min-w-[312px] !rounded-[26px] font-inter font-bold"
>
Proceed to checkout
</Button>
</a>
</div>
</div>
</div>
</div>
</>
);
}
