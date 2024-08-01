import { Heading, Text, Img, Radio } from "./..";
import React from "react";

export default function CardDetails({
cardImage = "images/img_fi_14062982_1. svg",
cardName = "HDFC Debit Card", 
cardNumber = "XX48",
cardExpiry = "Exp : 03/22",
...props
}) {
return (
<div 
{... props}
className={`${props.className} flex md:flex-col items-center gap-2 p-3.5 border-blue_gray-100_01 border border-solid bg-white-a700 flex-1 rounded[16px]`}
> 
<Radio size="rdo1" value="radioselection1" name="radioselection" className="w-[20px]" />
<div className="flex flex-1 items-center justify-center gap-2 md: self-stretch">
< Img src={cardImage} alt="Card Image" className="h-[48px] w-[48px]" />
<div className="flex flex-1 flex-col items-start justify-center gap-1.5 sm:gap-1.5">
<Text as="p" className=" | font-medium |text-black-900_02 sm:text-[13px]">
{cardName}
</Text>
<div className="flex flex-wrap justify-between gap-5 self-stretch"> 
<Heading size="texts" as="p" className=" ! font-normal Itext-gray-700">
{cardNumber}
</Heading>
<Heading size="texts" as="p" className="!font-normal Itext-gray-700">
{cardExpiry}
</Heading>
</div>
</div>
</div>
</div>
);
}
