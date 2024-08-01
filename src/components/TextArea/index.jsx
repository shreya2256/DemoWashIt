import React from "react";
import PropTypes from "prop-types";

const shapes = { 
round: "rounded-[16px]",
};
const variants = { 
tarOutlineBluegray10001: "!border-blue_gray-100_01 border border-solid",
};
const sizes = { 
xs: "h- [118px] p-4 text-[14px]",
};

const TextArea = React.forwardRef(
(
{
className = "",
name = "",
placeholder = "",
shape,
size = "xs",
variant = "tarOutlineBluegray10001",
onchange,
...restProps
},
ref,
) => {
const handlechange = (e) => {
if (onchange) onchange(e?. target?.value);
};

return (
    <textarea
    ref={ref}
    className={`${className} ${(shape && shapes[shape]) || ""}  ${sizes[size] || ""} ${variants[variant] || ""}`}
    name={name}
    onChange={handleChange}
    placeholder={placeholder}
    {...restProps}
    />
    );
    },
    );

    TextArea.propTypes = { 
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["tarOutlineBluegray10001"]),
    };
    
    export { TextArea };