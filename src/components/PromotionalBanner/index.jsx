import { Button, Text, Heading, Img } from "./..";
import React from "react";

export default function PromotionalBanner({
userImage = "images/img_image_6.png",
headlineText = "Fantastic deals await!",
subText = "Don&#39;t miss our promotions on home appliances, audio and video products",
buttonText = "Buy now",
...props
}) { 
return (
<div
{...props}
className={`${props.className} flex flex-col items-start w- [32%] md:w-full gap-[22px] px-5 py-9 sm:py-5 rounded- [30px]`}
> 
<Img src={userImage} alt="Product Image" className="h-[238px] w-full object-cover" />
<div className="flex flex-col items-start gap-2 self-stretch"> 
<Heading size="text6x]" as="p">
{headlineText}
</Heading>
<Text as="p" className="w-full leading-6 Itext-black-900">
{subText}
</Text>
</div>
<Button color="deep_orange_A700" shape="round" className="min-w-[170px] font-inter font-medium">
{buttonText}
</Button>
</div>
);
}