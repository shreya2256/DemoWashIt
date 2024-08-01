import { Text, Img } from "./..";
import React from "react";

export default function ProductDetails1({
noCostEmiText = "No Cost EMI starts from 7065.42/ month.",
standardEmiText = "Standard EMI starts from 2569.79/ month.",
debitCardEmiText = "EMI also available on Debit cards",
learnMoreLink = "Learn more",
...props
}) {
return (
<div
{...props}
className={`${props.className}flex md:flex-col justify-center items-center gap-5 p-3 border-gray-500 border border-solid flex-1 rounded-md`}
>
<Img src="images/img_bag-svg" alt="Product Image" className="h-[40px] w-[40px]" />
<div className="flex flex-1 flex-col items-start gap-1.5 md:self-stretch">
<div className="flex flex-col items-start gap-1 self-stretch sm: gap-1">
<Text as="p" className=" !font-medium !text-black-900_02 sm:text-[13px]">
{noCostEmiText}
</Text>
<Text as="p" className=" !font-medium !text-black-900_02 sm:text-[13px]">
{standardEmiText}
</Text>
<Text as="p" className=" !font-medium !text-black-900_02 sm:text-[13px]">
{debitCardEmiText}
</Text>
</div>
<a href="#" className="sm: text-[13px]">
<Text as="p" className=" | font-medium Itext-black-900_02 underline">
{learnMoreLink}
</Text>
</a>
</div>
</div>
);
}