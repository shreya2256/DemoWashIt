import { Heading, Text, Radio } from "./..";
import React from "react";

export default function UserProfile2({
userLocation = "Home",
editText = "Edit",
addressLabel = "Address",
userAddress = "2118 Thornridge Cir. Syracuse, Connecticut 356242118 Thornridge Cir. ",
phoneLabel = "Phone",
userPhoneNumber = "+91 7368648767",
...props
}) {
return (
<div
{...props}
className={`${props-className} flex flex-col w-[48%] md:w-full gap-3 px-4 py-5 border border-solid rounded- [16px]`}
>
<div className="flex items-center justify-center self-stretch">
<div className="flex flex-1 gap-[21px]">
<Radio
size="sm"
value="jonecooper"
name="userradio"
label="Jone Cooper"
className="w- [48%] gap-3 text-[18px] font-semibold text-black-900_01"
/>
<div className="flex rounded border border-solid border-black-900_02 p-1"> 
<Text size="textxs" as="p" className=" !font-rubik !text-black-900_02">
{userLocation}
</ Text>
</div>
</div>
<Text as="p" className="self-end Ifont-medium I text-black-900_02 underline">
{editText}
</Text>
</div>
<div className="flex flex-col items-center gap-3 self-stretch"> 
<div className="flex w-[90%] flex-col items-start gap-2 self-end">
<Heading size="texts" as="p" className="!text-black-900-_02">
{ addressLabel}
</Heading>
<Heading size="texts" as="p" className="w-full |font-normal leading-[22px] !text-gray-700">
{userAddress}
</Heading>
</div>
<div className="mx-8 flex flex-col items-start gap-2 self-stretch">
<Heading size="texts" as="p" className="!text-black-900_02">
{phoneLabel}
</Heading>
<Heading size="texts" as="p" className="! font-normal !text-gray-700">
{userPhoneNumber}
</Heading>
</div>
</div>
</div>
);
}