import { Text, Heading } from "../../components";
import SmartTVProfile from "../../components/SmartTVProfile";
import React, { Suspense } from "react";

const techProductsList = [
{ smartTVImage: "images/img_image_7_576×426.png", smartTVTitle: "Smart TV" },
{ smartTVImage: "images/img_image_7_3.png", smartTVTitle: "Washing machine" },
{ smartTVImage: "images/img_image_7_4.png", smartTVTitle: "Air conditioner"},
],

export default function ExperienceSection() {
return (
<>
{/* experience section */}
<div className="mt-[70px] flex flex-col items-center self-stretch"> 
<div className="container-sm flex flex-col gap-11 md: p-5">
<div className="flex flex-col items-start gap-1.5">
<Heading size="heading7x1" as="h2">
TechVolt Experience
</Heading>
<Text size="text2xl" as="p" className="tracking-[1.40px] |text-black-900_02">
Tips, guides and techy deep dives straight from the source
</Text>
</div>
<div className="flex gap-10 md: flex-col">
<Suspense fallback={<div>Loading feed...</div>}>
{techProductsList.map((d, index) => ( 
<SmartTVProfile {...d} key={"productsList" + index} />
))}
</Suspense>
</div>
</div>
</div>
</>
);
}