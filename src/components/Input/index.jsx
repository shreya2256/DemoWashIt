import React from "react";
import PropTypes from "prop-types";

const shapes = { 
square: "rounded- [Opx]",
round: "rounded- [24px]",
};

const variants = { 
outline: {
black_900_02: "border-black-900_02 border-b border-solid text-gray-700",
blue_gray_100_01: "border-blue_gray-100_01 border border-solid text-gray-700",
},
fill: {
white_A700: "bg-white-a700 text-gray-700",
gray_300_02: "bg-gray-300_02 text-gray-700",
},
};

const sizes = { 
Sm:"h- [38px] pr-[34px] text-[18px]",
XS :"h- [20px] pr-[34px] text-[14px]",
lg: "h- [60px] p1-4 pr-[34px] text-[14px]",
md: "h-[50px] px-3.5 text-[14px]",
};

const Input = React. forwardRef(
    (
    {
    className ="",
    name = "",
    placeholder = "",
    type = "text",
    children,
    label ="",
    prefix,
    suffix,
    onChange,
    shape,
    variant = "fill",
    size = "md",
    color = "white_A700",
    ...restProps
    },
    ref,
) => { 
return (
<label
className={`${className} flex items-center justify-center cursor-text text-gray-700 ${(shape && shapes[shape]) || ""}$(variants[variant]?. [color] || variants[variant] || ""} ${sizes[size] || ""}`}
>
{!!label && label}
{!!prefix && prefix}
<input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
{!!suffix && suffix}
</label>
);
},
);
Input.propTypes = { 
className: PropTypes.string,
name: PropTypes.string,
placeholder: PropTypes.string,
type: PropTypes.string,
label: PropTypes. string,
prefix: PropTypes.node,
suffix: PropTypes. node,
shape: PropTypes.oneOf(["square", "round" ]),
size: PropTypes.oneOf(["sm", "xs", "Ig", "md"]),
variant: PropTypes.oneOf(["outline", "fill"]),
color: PropTypes.oneOf(["black_900_02", "blue_gray_100_01", "white_A700", "gray_300_02"]),
};

export {Input} ;