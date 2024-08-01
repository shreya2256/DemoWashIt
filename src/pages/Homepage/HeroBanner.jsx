import { Button, Img, Text, Heading, Slider } from "../../components";
import React from "react";

export default function HeroBanner() {
const [sliderState, setSliderState] = React.useState(0);
const sliderRef = React.useRef(null);

return ( 
<>
{/* hero banner section */}
<div className="mt-10 self-stretch"> 
<div className="flex flex-col items-center"> 
<div className="container-sm flex flex-col items-center gap-10 md:p-5">
<div className="mx-auto flex w-full self-stretch rounded-[10px] bg-white-a700">
<Slider
autoPlay
autoPlayInterval={2000}
responsive ={{0: { items: 1 }, 551: {  items: 1 }, 1051: { items: 1 } }}
disableDotsControls
activeIndex={sliderState}
onSlideChanged={(e) => {
setSliderState(e?.item);
}}
ref={sliderRef}
items={[...Array(3)].map(() => (
<React.Fragment key={Math.random()}>
<div className="flex rounded- [10px] bg-white-a700">
<div className="h-[640px] w-full rounded-[10px] bg-[url/public/images/img_group_2.png)] bg-cover bg-no-repeat px-14 py-[152px] md:h-auto md: p-5">
<div className="mt-7 flex flex-col items-start gap-9">
<Heading size="heading8x1" as="h1" ClassName="leading-[114.99%] text-white-a700"> 
<>
Galaxy M55 5G
<br />
Must be a Monster
</>
</Heading>
<Text size="textxl" as="p" className="! font-medium !text-white-a700">
Snapdragon 7 Gen 1 | 120HZ SAMOLED+
</ Text>
<Button
size="md"
rightIcon={<Img src="images/img_frame.svg" alt="Frame" className="h-[24px] w-[24px]" />}
className="min-w-[166px] gap-2.5 rounded-md font-bold"
> 
Buy Now
</Button>
</div>
</div>
</div>
</React.Fragment>
))}
/>
</div>
<div className="flex items-center justify-center">
{[...Array(3)].map((_, i) => (
<>
{sliderState >= i * (sliderRef?.current?.state?.itemsInSlide || 1) &&
sliderState < (i + 1) * (sliderRef?.current?.state?.itemsInSlide || 1) ? (
<div
onClick={() => {
sliderRef?.current?.slideTo(i * sliderRef?.current?.state?.itemsInSlide);
}}
className="mr-[7px] inline-block h-[12px] w-[30px] cursor-pointer rounded-md bg-black-900_02"
/>
) : ( 
<div
onClick={() => {
sliderRef?.current?.slideTo(i * sliderRef?.current?.state?.itemsInSlide);
}}
className="mr-[7px] inline-block h-[12px] w-[12px] cursor-pointer rounded-md bg-black-900_99"
/>
)}
</>
))}
</div>
</div>
</div>
</div>
</>
);
}