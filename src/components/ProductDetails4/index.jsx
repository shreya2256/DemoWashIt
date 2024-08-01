import { Button, Heading, Text, RatingBar, Img } from "./..";
import React from "react";

export default function ProductDetails4({
productImage = "images/img_image_6_238x396-png",
productDescription ="5 star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
productReviewcount = "3(122)",
productMRPLabel = "MRP",
productOldPrice = "785990",
productDiscount = "46% Off",
productPrice = "17,800",
addToBasketButton = "Add To Basket",
...props
}) { 
return ( 
<div
{...props}
className={`${props.className} flex flex-col w-[22%] md:w-full gap-[22px] px-5 py-6 sm:py-5 border-gray-400_01 border border-solid rounded- [30px]`}
> 
<Img src={productImage} alt="Product Image" className="mt-3 h-[192px] w-full object-cover" />
<div className="flex flex-col gap-2 self-stretch"> 
<Text size="textxl" as="p" className="! font-medium leading-[27px] !text-black-900">
{productDescription}
</Text>
<div className="flex items-center gap-2">
<RatingBar value={1} isEditable={true} size={18} className="flex gap-2.5" />
<Text as="p" className="!text-black-900">
{productReviewCount}
</Text>
</div>
</div>
<div className="flex flex-col items-start gap-2 self-stretch">
<div className="flex flex-wrap gap-2 self-stretch"> 
<Text size="textx1" as="p">
{productMRPLabel}
</Text>
<Text size="textx1" as="p" className="line-through">
{productoldPrice}
</Text>
<Text size="textx1" as="p" className="|text-black-900_02">
{productDiscount}
</Text>
</div>
<Heading size="heading5x1" as="h1">
{productPrice}
</Heading>
</div>
<Button shape="round" className="self-stretch border border-solid border-black-900_02 font-inter font-medium">
{addToBasketButton}
</Button>
</div>
);
}