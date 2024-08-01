import React from "react";

const sizes = {
textxs: "text-[12px] font-normal not-italic",
textlg: "text-[16px] font-normal not-italic",
textxl: "text-[18px] font-normal not-italic",
text2xl: "text-[20px] font-normal not-italic",
text5xl: "text-[28px] font-normal not-italic md: text-[26px] sm:text-[24px]",
};

const Text = ({ children, className = "'", as, size = "textlg", ...restProps }) => {
const Component = as || "p";

return (
<Component className={`text-gray-700 font-poppins ${className} ${sizes[sizel]}`}{...restProps}>
{children}
</Component>
);
};

export {Text };