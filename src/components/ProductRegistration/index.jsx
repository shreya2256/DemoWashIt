import { Button, Img, Text } from "./..";
import React from "react";

export default function ProductRegistration({ 
productTitle = (
<>
Product <br />
Registration
</>
),
productDescription = "Registering your product will help you get faster support.",
productImage = "images/img_icon.svg",
learnMoreButton = "Learn More",
...props
}) { 
return (
<div
{...props}
className={`${props.className} flex flex-col items-start w-full gap-[50px] px-5 py-8 sm:py-5 border-gray-400 border border-solid rounded- [24px]`}
> 
<div className="flex items-start gap-3 self-stretch">
<div className="flex flex-1 flex-col gap-2.5 self-center">
<Text size="text5xl" as="p" className="leading-[42px] !text-black-900">
{productTitle}
</Text>
<Text as="p" className="leading-6">
{productDescription}
</Text>
</div>
<Img src={productImage} alt="Product Image" className="h-[48px] w-[48px]" />
</div>
<Button
color="deep_orange_A700"
size="md"
rightIcon={<Img src="images/img_frame_white_a700.svg" alt="Frame" className="h-[24px] w-[24px]" />}
className="min-w-[168px] gap-2.5 rounded-[24px] font-inter font-medium"
>
{learnMoreButton}
</Button>
</div>
);
}