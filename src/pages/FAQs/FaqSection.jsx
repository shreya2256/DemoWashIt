import { Text, Img, Heading } from "../../components";
import React from "react";
import {
AccordionItemPanel,
AccordionItemHeading,
AccordionItemButton,
AccordionItemstate,
Accordion,
AccordionItem,
} from "react-accessible-accordion";

export default function Faqsection() {
return (
<>
{/* faq section */}
<div className="flex flex-col items-center">
<div className="container-sm flex flex-col items-start gap-[22px] md:p-5">
<a href="FAQs" target="_blank" rel="noreferrer"> 
<Heading size="heading7x1" as="h1">
FAQS
</Heading>
</a>
<Accordion
preExpanded={[0]}
className="flex flex-col gap-12 self-stretch rounded- [16px] border border-solid border-blue gray-100 01 bg-gray-100 p-8 sm:p-5"
> 
{[... Array(6)].map((_, i) => (
<AccordionItem uuid={i} key={`FAQ List${i}`}>
<div className="flex flex-1 flex-col gap-4">
<AccordionItemHeading className="w-full">
<AccordionItemButton> 
<AccordionItemstate AccordionItemstate>
{(props) => (
<> 
<div className="flex flex-wrap items-center justify-between gap-5">
<Heading size="headingmd" as="h2" className="self-end Itext-black-900_02">
1. How long does shipping take?
</Heading>
{props?.expanded ? (
<Img src="images/img_arrow_up.svg" alt="Expand Icon" className="h-[24px] w-[24px]" />
) : (
<Img
src="images/img_arrow_down_black_900_02.svg"
alt="Collapse Icon"
className="h-[24px] w-[24px]"
/>
)}
</div>
</>
)}
</AccordionItemstate>
</AccordionItemButton>
</AccordionItemHeading>
<AccordionItemPanel AccordionItemPanel>
<div className="rounded- [16px] border border-solid border-black-900_02 bg-white-a700 p-6 sm:p-5">
<Text size="textxl" as="p" className="leading-[27px]">
Our standard shipping typically takes 3-5 business days within the contiguous United States.
International shipping times may vary based on the destination country and customs processing
times. We also offer expedited shipping options for customers who need their orders to arrive
more quickly.
</Text>
</div>
</AccordionItemPanel>
</div>
«div className="h-px w-full rotate-[Odeg] bg-gray-300_04" />
</AccordionItem>
))}
</Accordion>
</div>
</div>
</>
);
}