import { Img, Text, Heading } from "../../components";
import React from "react";

export default function ProductdetailsColumnThree (){
return (
<div className="flex flex-col items-center gap-[30px]">
<div className="container-sm flex flex-col items-center px-14 md:p-5 md: px- 5">
<div className="flex flex-col items-center gap-2.5">
<Heading size="heading6x1" as="h2">
Bigger Capacity in the Same Space
</Heading>
<Text as="p" className="tracking-[1.12px] |text-black-900_02">
Get bigger drum capacity in same size!
</Text>
</div>
</ div>
<Img src="images/img_image_10.png" alt="Imageten" className="h-[740px] w-full object-cover md:h-auto" />
</div>
);
}