import { Text, Img, Input, Heading } from "./.."
import React from "react";

export default function Footer ({...props }) {
return (
<footer
{...props}
className={`${props.className} flex justify-center items-center py-9 sm:py-5 border-gray-400 border border-solid bg-gray-300_06` }
> 
<div className="container-sm flex justify-center md:p-5">
<div className="flex w-full flex-col items-center">
<div className="flex items-start justify-between gap-5 self-stretch md: flex-col"> 
<div className="flex w-[32%] flex-col gap-9 self-center md:w-full"> 
< Img src="images/img_footer_logo.png" alt="Footer Logo" className="h-[50px] w-[222px] object-contain" />
<div className="flex flex-col gap- [18px]">
<Text as="p" className="leading-[26px] |text-black-900_02">
TechVolt: Unleashing Innovation, Redefining Convenience - Your Ultimate Destination for Seamless Tech
Exploration and Empowerment.
</Text>
<div className="flex items-center gap-2.5">
<Img src="images/img_lock_black_900_02.svg" alt="Security Icon" className="h-[24px] w-[24px]" />
<Text as="p" className="self-end Itext-black-900_02">
TechVolt@Gmail.com
</Text>
</div>
</div>
</div>
<div className="flex w-[30%] items-center justify-between gap-5 md:w-full sm:flex-col">
<div className="flex w-[64%] flex-col items-start gap-3 sm:w-full"> 
<Heading as="h6" className="I text-black-900_02">
Sitemap
</Heading>
<ul className="flex flex-col items-start gap-3">
<li>
<a href="Product" target="_blank" rel="noreferrer">
<Text as="p" className="!text-black-900_02">
Product
</Text>
</a>
</li>
<li>
<a href="Services" target="_blank" rel="noreferrer"> 
<Text as="p" className="|text-black-900_02">
Services
</Text>
</a>
</li>
<li>
<a href="Article" target="_blank" rel="noreferrer">
<Text as="p" className="|text-black-900_02">
Article
</Text>
</a>
</li>
<li>
<a href="#">
<Text as="p" className="|text-black-900_02">
About Us
</Text>
</a>
</li>
</ul>
</div>
<div className="flex flex-col items-start gap-3">
<Heading as="h6" className="Itext-black-900_02">
Information
</Heading>
<ul className="flex flex-col items-start gap-3"> 
<li>
<a href="#">
<Text as="p" className="!text-black-900_02">
Privacy Policy
</Text>
</a>
</li>
<li>
<a href="#"> 
<Text as="p" className=" !text-black-900_02">
     Terms & Conditions
</Text>
</a>
</li>
<li>
<a href="Contact" target="_blank" rel="noreferrer"> 
<Text as="p" className="| text-black-900_02">
Contact
</ Text>
</a>
</li>
<li>
<a href="FAQs" target="_blank" rel="noreferrer"> 
<Text as="p" className="|text-black-900_02">
FAQS
</Text>
</a>
</li>
</ul>
</div>
</div>
<div className="flex w-[18%] flex-col items-start gap-3.5 md:w-full">
<Heading as="h6" className="!text-black-900 02">
Connect With Us
</Heading>
<Input
shape="round"
name="Newsletter Input"
placeholder={`Enter email id`}
suffix={<Img src="images/img_frame_gray_700.svg" alt="Frame" className="h-[24px] w-[24px]" />}
className="gap-[34px] self-stretch border border-solid border-blue_gray-100_01"
/>
<div className="flex w-[52%] justify-between gap-5 md:w-full">
<Img src="images/img_bx_bxl_instagram_alt.svg" alt="Instagram Icon" className="h-[24px] w-[24x]" />
<Img src="images/img_akar_icons_twitter_fill.svg" alt="Twitter Icon" className="h-[24px] w-[24px]" />
<Img src="images/img_akar_icons_linkedin_fill.svg" alt="Linkedin Icon" className="h-[24px] w-[24px]" />
</div>
</div>
</div>
<div className="mt - [60px] h-px w-full self-stretch bg-gray-400_01" />
<Text as="p" className="mt-[26px] Itext-black-900_cc">
© Copyright 2024 TechVolt. All rights reserved
</ Text>
</div>
</div>
</footer>
);
}