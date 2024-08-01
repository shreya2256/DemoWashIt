import { Text, Img,Radio} from "./..";
import React from "react";

export default function UserProfile3({ userImage ="images/img_ fi_ 14062982.svg", userText = "Paypal", ...props }) {
return (
<div
{... props}
className={`${props.className} flex items-center gap-2 p-4 border-blue_gray-100_01 border border-solid bg-white-a700 flex-1 rounded -[16px]`}
> 
<Radio value="radiobutton1" name="radiobutton" className="h-[20px] w-[20px]" />
<div className="flex flex-1 items-center gap-2">
<Img src={userImage} alt="Payment Logo" className="h- [48px] w-[48px]" />
<Text as="p" className="! font-medium !text-black-900_02 sm: text-[13px]">
{userText}
</Text>
</div>
</div>
);
}