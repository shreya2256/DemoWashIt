import { Img, Text } from "*/..";
import React from "react";

export default function Header ({ ...props }) {
return (
<header
{ ...props}
className={`${props.ClassName} flex justify-center items-center py-10 sm:py-5 border-pray-200 border-b border-solid be-white-a700`}
> 
<div className="container-sm flex items-center justify-between gap-5 md:flex-col md:p-5">
<Img src="images/img_header_logo-png" alt="Header Logo" className="h-[50px] w-[222px] object-contain" />
<div className="flex">
<ul className="flex flex-wrap items-center gap-[30px]"> 
<li>
<a href="#" className="border-b-2 border-solid border-deep_orange-a700">
<Text size="text2x1" as="p" className="p-2.5 tracking-[1.40px] Itext-black-900_02">
Home
</Text>
</a>
</li>
<li>
<a href="#" className="mb-2">
<Text size="text2x]" as="p" className="p-2.5 tracking-[1.40px] text-black-900_02">
Shop
</Text>
</a>
</li>
<li>
<a href="#">
<Text size="text2x1" as="p" className="p-2.5 tracking-[1.40px] Itext-black-900_02">
Accessories
</Text>
</a>
</li>
<li>
<a href="#">
<Text size="text2x1" as="p" className="p-2.5 tracking-[1.40px] |text-black-900_02">
About Us
</Text>
</a>
</li>
<li>
<a href="#">
<Text size="text2x1" as="p" className="p-2.5 tracking-[1.40px] Itext-black-900_02">
Contact Us
</Text>
</a>
</li>
</ul>
</div>
<div className="flex w-[12%] justify-between gap-5 md:w-full">
<a href="#">
<Img src="images/img_search.svg" alt="Search Icon" className="h-[32px] w-[32px]" />
</a>
<a href="#">
<Img src="images/img_bag.svg" alt="Cart Icon" className="h-[32px] w-[32px]" />
</a>
<a href="#">
<Img src="images/img_lock.svg" alt="Account Icon" className="h- [32px] w-[32px]" />
</a>
</div>
</div>
</header>
);
}