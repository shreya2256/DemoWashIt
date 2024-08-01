import { Text, Heading, Img } from "./..";
import React from "react";

export default function UserProfile({
userImage = "images/img_ image_7_318X420.png",
headerText = "Complete your space",
subHeaderText = "TechVolt Objet Collection",
...props
}) { 
return (
<div {...props} className={`${props.className} flex flex-col w-[30%] md:w-full gap-6`}>
<Img src={userImage} alt="Featured Image" className="h-[318px] w-full rounded-[20px] object-cover" />
<div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
<Heading size="text4x1" as="p">
{headerText}
</Heading>
<Text size="textx]" as="p">
{subHeaderText}
</Text>
</div>
</div>
);
}