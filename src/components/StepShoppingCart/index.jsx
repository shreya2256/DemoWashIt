import { Heading, Text } from "./..";
import React from "react";

export default function StepShoppingCart({ stepNumber = "01", shoppingCartText = "Shopping cart", ...props }) { 
return (
<div {...props} className={`${props.className} flex flex-col items-center md:w-full gap-4` }>
<Text
as="p"
className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border-2 border-solid border-black-900_02 bg-black-900_02 text-center  !font-roboto !font-medium !text-white-a700"
>
{stepNumber}
</Text>
<div className="flex justify-center self-stretch p-2.5"> 
<Heading size="texts" as="p" className="self-end font-roboto Itext-black-900_02">
{shoppingCartText}
</Heading>
</div>
</div>
);
}