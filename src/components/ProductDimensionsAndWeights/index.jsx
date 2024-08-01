import { Text, Heading } from "./..";
import React from "react";

export default function ProductDimensionsAndWeights({ 
titleText = "DIMENSIONS & WEIGHTS",
productDimensionsLabel = "Product Dimensions (WXHXD mm)",
productDimensionsValue = "600 x 850 x 565",
weightLabel = "Weight (kg)",
weightvalue = "59kg",
...props
}) {
return( 
<div {...props} className={`${props.className} flex flex-col gap-[22px] flex-1 container-sm`}> 
<div className="flex flex-col items-start gap-2.5 self-stretch">
<Heading size="text3x1" as="p">
{titleText}
</Heading>
<div className="h-px w-full self-stretch bg-gray-300_04" />
</div>
<div className="flex justify-center gap-12 self-stretch"> 
<div className="flex flex-col items-start justify-center gap-2">
<Text size="textxs" as="p">
{productDimensionsLabel}
</Text>
<Text as="p" className="Itext-black-900_02">
{productDimensionsValue}
</Text>
</div>
<div className="flex flex-1 flex-col items-start justify-center gap-2.5">
<Text size="textxs" as="p">
{weightLabel}
</Text> 
<Text as="p" className="|text-black-900_02">
{weightvalue}
</ Text>
</div>
</div>
</div>
);
}