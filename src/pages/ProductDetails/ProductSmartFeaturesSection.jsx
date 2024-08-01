import { Heading } from "../../components";
import React from "react";

export default function ProductSmartFeaturesSection() {
return (
<>
{/* product smart features section */}
<div className="mt - [116px] flex h-[930px] items-end justify-center self-stretch bg-[url/public/images/img_banner.png)] bg-cover bg-no-repeat py-[102px] md:h-auto md: py-5">
<div className="container-sm mt-[546px] flex justify-center px-14 md:p-5 md:px-5">
<div className="flex w-[62%] flex-col items-center gap-3 md:w-full">
<Heading size="heading6x]" as="h2" className="!font-bold !text-white-a700">
LG ThinQ® with Wi-Fi
</Heading>
<Heading
as="h3"
className="self-stretch text-center !font-bold leading-6 tracking-[1.12px] !text-white-a700"
>
LG ThinQ® with Wi-Fi makes laundry much more convenient. Smart Remote Control enables you to do your
laundry anytime, anywhere. With Download Cycle, download up to 20 additional wash programs. Smart
Diagnosis™ helps you quickly troubleshoot almost any minor issue before it becomes a bigger problem.
</Heading>
</div>
</div>
</div>
</>
);
}