import { Heading,Img } from "./..";
import React from "react";

export default function SmartTVProfile({
smartTVImage = "images/img_image_7_576x426.png",
smartTVTitle = "Smart TV",
...props
}) {
return (
<div {...props} className={`${props.className} h-[576px] w-[30%] md:w-full md:h-auto relative` }>
<Img src={smartTVImage} alt="Tv Image" className="mx-auto h-[576px] w-full flex-1 rounded-[20px] object-cover"/>
<Heading size="heading2x1" as="h4" className="absolute bottom-[6%] left-[8%] m-auto !text-white-a700">
{smartTVTitle}
</Heading>
</div>
);
}