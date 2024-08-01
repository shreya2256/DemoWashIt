import { Heading, Text, Img } from "•/..";
import React from "react";

export default function BuyMoreSaveComponent({
buyMoreSaveImage = "images/img_fi_11370591.svg",
buyMoreSaveTitle = "Buy More Save More",
buyMoreSaveoffer = "Get 5% off* on cart value for 2 or more eligible products purchased together",
addButtonText = "Add",
...props
}) { 
return (
<div
{...props}
className={`${props.className} flex md:flex-col justify-center items-start p-4 border-gray-500 border border-solid flex-1 rounded-md`}
> 
<div className="flex flex-1 items-start justify-center gap-5 self-center md:self-stretch">
<Img src={buyMoreSaveImage} alt="Promo Image" className="h-[36px] w-[36px]"/>
<div className="flex flex-1 flex-col items-start self-center">
<Text as="p" className="!font-medium !text-black-900_02 sm:text-[13px]">
{buyMoreSaveTitle}
</Text>
<Text size="textxs" as="p">
{buyMoreSaveoffer}
</Text>
</ div>
</div>
<Heading size="headingxs" as="p" className="underline">
{addButtonText}
</Heading>
</div>
);
}
