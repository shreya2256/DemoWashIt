import { Text, Img } from "../../components";
import React from "react";

export default function BreadcrumbNavigation() {
return (
<>   
{/* breadcrumb navigation section */}
<div> 
<div className="flex justify-center border-b border-solid border-gray-200 bg-white-a700 py-3"> 
<div className="container-sm flex items-center gap-1.5 md:p-5 sm: flex-col"> 
<Text size="textx]" as="p" className="capitalize"> 
Home
</Text>
<Img
src="images/img_arrow_right_gray_700.svg"
alt="Arrow Right"
className="h-[24px] w-[24px] self-start sm:w-full sm: self-auto"
/>
<Text size="textxl" as="p" className="|font-medium capitalize">
Product Details
</Text>
<Img
src="images/img_arrow_right_gray_700.svg"
alt="Arrow Right"
className="h-[24px] w-[24px] self-start sm:w-full sm:self-auto"
/>
<Text size="textx1" as="p" className="!font-medium capitalize ! text-black-900_02"> 
Shopping Cart
</Text>
</div>
</div>
</div>
</>
);
}