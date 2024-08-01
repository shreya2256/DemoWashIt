import React from "react";
import PropTypes from "prop-types";

const shapes = { 
square: "rounded- [Opx]",
circle: "rounded- [50%]",
round: "rounded- [28px]",
};
const variants = { 
fill: { 
black_900_02: "bg-black-900_02 text-white-a700",
gray_200_01: "bg-gray-200_01",
deep_orange_A700: "bg-deep_orange-a700 text-white-a700",
gray_300_06: "bg-gray-300_06 text-black-900_02",
white_A700: "bg-white-a700 text-black-900_02",
},
outline: { 
black_900_02: "border-black-900_02 border border-solid text-black-900_02",
blue_gray_100_01: "border-blue_gray-100_01 border border-solid text-blue_gray-900",
},
};
const sizes = {
sm: "h-[38px] px-2",
lg: "h-[48px] px-0.5",
xs: "h-[26px] px-3 text-[12px]",
xl: "h-[52px] px-3",
md: "h-[46px] px-[30px] text-[16px]",
"2xl":"h-[52px] px-[34px] text-[16px]",
"3xl":"h-[56px] px-[34px] text-[16px]",
};

const Button = ({ 
    children,
    className="",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "3xl",
    color = "white_A700",
    ...restProps
    }) => {
    return (
    <button
    className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${(shape && shapes[shape]) ||""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
    {... restProps}
    >
    {!!leftIcon && leftIcon}
    {children}
    {!!rightIcon && rightIcon}
    </button>
    );
    };

    Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf (["square", "circle", "round"]),
    size: PropTypes.oneOf(["sm","lg", "xs","xl", "md", "2xl","3xl"]),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf([
        "black_900_02",
        "gray_200_01",
        "deep_orange_A700" ,
        "gray_300_06",
        "white_A700",
        "blue_gray_100_01",
    ]),
};

export { Button };