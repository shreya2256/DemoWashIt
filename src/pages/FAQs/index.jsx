import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FaqSection from "./FaqSection";
import React from "react";

export default function FAQsPage () {
return (
<> 
<Helmet>
<title>FAQs - TechVolt Customer Support</title>
<meta
name="description"
content="Find answers to frequently asked questions about shipping, returns, product sizes, and more at TechVolt. Get the support you need for a seamless shopping experience."
/>
</Helmet>
<div className="flex w-full flex-col gap-[34px] bg-white-a700">
{/* header section */}
<div>
<Header />

{/* breadcrumb section */}
<div className="flex justify-center border-b border-solid border-gray-200 bg-white-a700 py-3.5">
<div className="container-sm flex items-center gap-1.5 md:p-5">
<Text size="textxl" as="p" className="capitalize">
Home
</Text>
<Img src="images/img_arrow_right_gray_700.svg" alt="Arrow Image" className="h-[24px] w-[24px]" />
<a href="FAQs" target=" _blank" rel="noreferrer"> 
<Text size="textxl" as="p" className="|font-medium capitalize Itext-black-900_02">
FAQS
</Text>
</a>
</div>
</div>
</div>

{/* faq section */}
< FaqSection />

{/* footer section */}
< Footer />
</div>
</>
);
}