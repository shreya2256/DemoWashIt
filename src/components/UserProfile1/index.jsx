import { Heading, Text, Button, Img } from  "./..";
import React from "react";

export default function UserProfile1({ 
userImage = "images/img_ frame_deep_orange_a700.svg",
userName = "Jone Cooper",
homeButton = "Home",
editText = "Edit",
addressLabel = "Address",
addressText = "2118 Thornridge Cir. Syracuse, Connecticut 356242118 Thornridge Cir. ",
phoneLabel = "Phone",
phoneNumber = " +91 7368648767",
...props
}) { 
return ( 
<div
{...props}
className={`${props.className} flex flex-col w- [48%] md:w-full gap-3 px-4 py-5 border border-solid rounded -[14px]`}
>
<div className="flex items-center justify-center self-stretch"> 
<div className="flex flex-1 gap-[21px]" > 
<div className="flex items-center gap-3">
<Img src={userImage} alt="Profile Image" className="h-[20px] w-[20px]" />
<Heading size="headingmd" as="h6" className="self-end Itext-black-900_01">
{userName}
</Heading>
</div>
<Button color="black_900_02" size="xs" variant="outline" className="min-w-[56px] rounded font-rubik">
{homeButton}
</Button>
</div>
<Text as="p" className="self-end !font-medium !text-black-900_02 underline">
{editText}
</Text>
</div>
<div className="flex flex-col items-center gap-3 self-stretch">
<div className="flex w-[90%] flex-col items-start gap-1 self-end">
<Heading size="texts" as="p" className="!text-black-900_02">
{ addressLabel}
</Heading>
<Heading size="texts" as="p" className="w-full !font-normal leading-[22px] !text-gray-700">
{ addressText}
</Heading>
</div>
<div className="mx-8 flex flex-col items-start gap-1 self-stretch">
<Heading size="texts" as="p" className="|text-black-900_02">
{phoneLabel}
</Heading>
<Heading size="texts" as="p" className=" !font-normal !text-gray-700">
{ phoneNumber}
</Heading>
</div>
</div>
</div>
);
}
