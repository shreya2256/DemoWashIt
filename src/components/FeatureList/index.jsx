import { Text } from "./..";
import React from "react";

export default function FeatureListf({
motionFeatureText = "6 Motion DD",
motionFeatureStatus = "Yes",
aiFeatureText = "AI DD",
aiFeatureStatus = "Yes",
cycleEndFeatureText = "End of Cycle Signal",
cycleEndFeatureStatus = "Yes",
addItemFeatureText = "Add Item",
addItemFeatureStatus = "Yes",
...props
}) {
return (
<div {...props} className={`${props.className} flex md:flex-col items-center gap-12 flex-1 container-sm` }>
<div className="flex w-full flex-col items-start justify-center gap-2">
<Text size="textxs" as="p">
{motionFeatureText}
</Text>
<Text as="p" className="!text-black-900_02">
{motionFeatureStatus}
</Text>
</div>
<div className="flex w-full flex-col items-start justify-center gap-2">
<Text size="textxs" as="p">
{aiFeatureText}
</Text>
<Text as="p" className="| text-black-900_02">
{aiFeatureStatus}
</Text>
</div>
<div className="flex w-full flex-col items-start justify-center gap-1.5">
<Text size="textxs" as="p">
{cycleEndFeatureText}
</Text>
<Text as="p" className="|text-black-900_02">
{cycleEndFeatureStatus}
</Text>
</div>
<div className="flex w-full flex-col items-start justify-center gap-2">
<Text size="textxs" as="p">
{addItemFeatureText}
</Text>
<Text as="p" className="!text-black-900_02">
{addItemFeatureStatus}
</Text>
</div>
</div>
);
}