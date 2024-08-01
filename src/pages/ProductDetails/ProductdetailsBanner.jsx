import { Text, Heading } from "../../components";
import React from "react";

export default function ProductdetailsBanner() {
return ( 
<div className="mt- [116px] flex h-[930px] items-end justify-center self-stretch bg-[url/public/images/img_banner.png)] bg-cover bg-no-repeat py-[102px] md:h-auto md: py-5">
<div className="container-sm mt - [546px] flex justify-center px-14 md:p-5 md:px-5">
<div className="flex w-[62%] flex-col items-center gap-3 md:w-full">
<Heading size="heading6x1" as="h2" className="!font-bold !text-white-a700">
<>
Thoroughly
<br />
Clean in 39 minutes
</>
</Heading>
<Text as="p" className="w-[34%] leading-6 tracking-[1.12px] Itext-white-a700 md:w-full">
With TurboWash 360, your laundry can be thoroughly done in just 39 minutes with more fabric protection. 4
directions of 3D multi nozzles which reaches every inch of your laundry.
</Text>
</div>
</div>
</div>
);
}