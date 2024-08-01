import React from "react";

const sizes = {
texts:"text-[14px] font-medium not-italic",
textmd:"text-[15px] font-medium",
text3x1:"text-[24px] font-medium md: text-[22px]",
text4x1:"text-[26px] font-medium md:text-[24px] sm:text- [22px]",
text6x1: "text-[32px] font-medium md: text-[30px] sm: text-[28px]",
headingxs:"text-[14px] font-semibold",
headings:"text- [16px] font-semibold",
headingmd:"text-[18px] font-semibold",
headinglg:"text-[20px] font-semibold",
headingxl: "text-[22px] font-semibold",
heading2x1: "text-[24px] font-semibold md: text-[22px]",
heading3x1: "text-[26px] font-semibold md:text-[24px] sm:text-[22px]",
heading4xl:"text-[32px] font-extrabold md: text-[30px] sm:text-[28px]",
heading5x1:"text-[36px] font-semibold md:text-[34px] sm:text-[32px]",
heading6xl:"text-[46px] font-semibold md:text-[42px] sm: text- [36px]",
heading7x1:"text-[56px] font-semibold md:text-[48px] sm: text- [42px]",
heading8x1: "text-[65px] font-semibold md: text-[48px]",
};

const Heading = ({ children, className = "", size = "headings", as, ...restProps }) =>{ 
const Component = as || "h6"; 

return (
<Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
{children}
</Component>
);
};

export {Heading };