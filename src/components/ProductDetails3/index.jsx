import { Button, Img, Heading, Text, RatingBar } from "./..";
import React from "react";

export default function ProductDetails3({
productImage = "images/img_image_3_2.png",
productDescription ="5 star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
productReviewCount = "3(122)",
productMRPLabel = "MRP",
productoldPrice = "*85990",
productDiscount = "46% Off",
productPriceDrop = "Price drop by 72100",
productFinalprice = "*17,800",
addToBasketButton = "Add To Basket",
...props
}) { 
return (
<div
{...props}
className={`${props.className} flex flex-col w-full gap-6 px-[22x] py-6 sm:p-5 border-gray-400_01 border border-solid rounded- [30px]` }
>
<div className="relative h-[328px] self-stretch">
<Img
src={productImage}
alt="Product Image"
className="absolute bottom-o left-o right-e top-0 m-auto h-[316px] w-full flex-1 object-cover"
/>
<Img
src= "images/img_icon_gray_400_02.svg"
alt="Product Icon"
className="absolute right-[-1px] top-0 m-auto h-[24px] w-[24px]"
/>
</div>
<div className="mb-3 flex flex-col gap-[22px] self-stretch"> 
<div className="flex flex-col gap-2"> 
<Text size="textx]" as="p" className="| font-medium leading-[27px] !text-black-900">
{productDescription}
</Text>
<div className="flex items-center gap-2">
<RatingBar value={1} isEditable={true} size={18} className="flex gap-2.5" />
<Text as="p" className="|text-black-900"> 
{productReviewCount}
</Text>
</div>
</div>
<div className="flex flex-col items-start gap-2"> 
<div className="flex items-center justify-between gap-5 self-stretch">
<div className="flex flex-wrap gap-1.5"> 
<Text size="textx]" as="p"> 
{productMRPLabel}
</Text>
<Text size="textxl" as="p" className="line-through">
{productoldPrice}
</Text>
<Text size="textx1" as="p" className="Itext-black-900_02">
{productDiscount}
</Text>
</div>
<Text as="p" className="self-end !font-medium !text-green-900">
{productPriceDrop}
</Text>
</div>
<Heading size="heading5x1" as="h1"> 
{productFinalPrice}
</Heading>
</div>
<div className="flex justify-center gap-4">
<Button
color="deep_orange_A700"
size="2x1"
shape="round"
className="min-w- [310px] !rounded-[26px] font-inter font-bold"
>
{addToBasketButton}
</Button>
<Button size="xl"shape="circle" className="w-[52px] Irounded-[26px] border border-solid border-gray-400_01">
< Img src="images/img_favorite _deep_orange_a700.svg" />
</Button>
</div>
</div>
</div>
);
}