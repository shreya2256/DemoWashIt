import { Text, Heading } from "../../components";
import ProductRegistration from "../../components/ProductRegistration";
import React, { Suspense } from "react";

const productsupportGrid = [
{
productTitle: (
<>
Product <br />
Registration
</>
),
productDescription: "Registering your product will help you get faster support.",
productImage: "images/img_icon.svg",
learnMoreButton: "Learn More",
},
{ 
productTitle: "Product support",
productDescription: "Find manual, troubleshoot and warranty of your Techvolt product.",
productImage:"images/ img_icon_black_900_02.svg",
learnMoreButton: "Learn More",
},
{
productTitle: (
<>
Order
<br />
support
</>
),
productDescription: "Track your order and check order FAQ.",
productImage: "images/img_icon_black_900_02_48x48.svg",
learnMoreButton: "Learn More",
},
{ 
productTitle: (
<> 
Repair
<br />
request
</>
),
productDescription: "Request repair service conveniently online.",
productImage: "images/img_icon_48x48.svg",
learnMoreButton: "Learn More",
},
{ 
productTitle: "Quick help",
productDescription: "Get instant help on shopping.",
productImage:"images/img_icon_1.svg",
learnMoreButton: "Learn More",
},
{ 
productTitle: "WhatsApp",
productDescription: "Talk to our customer service via WhatsApp",
productImage: "images/img_volume.svg",
learnMoreButton: "Learn More",
},
{ 
productTitle: "Email us",
productDescription: "Send an Email to TechVolt Customer Service",
productImage: "images/img_icon_2.svg",
learnMoreButton: "Learn More",
},
{ 
productTitle: "Call us",
productDescription: "Speak directly with our support representatives.",
productImage: "images/img_icon_3.svg",
learnMoreButton: "Learn More",
},
];

export default function SupportSection() {
return (
<>
{/* support section */}
<div className="mt-28 flex flex-col items-center self-stretch"> 
<div className="container-sm flex flex-col gap-[46px] md:p-5">
<div className="flex flex-col items-start gap-1"> 
<Heading size="heading7x1" as="h2">
Need help?
</Heading>
<Text size="text2x1" as="p" className="tracking-[1.40px] |text-black-900_02">
We&#39;re here to provide all the help you need.
</ Text>
</div>
<div className="grid grid-cols-4 justify-center gap-10 gap-y-12 md:grid-cols-2 sm:grid-cols-1">
<Suspense fallback={<div>Loading feed...</div>}>
{productSupportGrid.map((d, index) => (
<ProductRegistration {...d} key={"supportGrid" + index} />
))}
</ Suspense>
</div>
</ div>
</div>
</>
);
}