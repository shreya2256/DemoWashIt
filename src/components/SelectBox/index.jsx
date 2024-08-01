import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
square: "rounded-[0px]",
round: "rounded-[16px]",
};
const variants = { 
outline: {
blue_gray_100_01: "border-blue_gray-100_01 border border-solid text-gray-700",
gray_400_01: "border-gray-400_01 border-t border-solid text-black-900",
},
fill: {
white_A700: "bg-white-a700 text-black-900_02",
},
};
const sizes = {
md: "h-[60px] p1-4 pr-[34px] text-[14px]",
xs: "h-[32px] p1-4 pr-[34px] text-[14px]",
sm: "h-[48px] pr-[34px] text-[16px]",
};

const SelectBox = React.forwardRef(
( 
{
children,
className = "",
options = [],
isSearchable = false,
isMulti = false,
indicator,
shape,
variant = "outline",
size = "sm",
color = "white_A700",
... restProps
},
ref,
) => { 
return (
<>
<Select
ref={ref}
options={options}
className={`${className} flex ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
isSearchable={isSearchable}
isMulti={isMulti}
components={{
IndicatorSeparator: () => null,
...(indicator && { DropdownIndicator: () => indicator }),
}}
styles={{
indicatorsContainer: (provided) => ({
...provided,
padding: undefined,
flexShrink: undefined,
width: "max-content",
"& > div": { padding: 0 },
}),
container: (provided) => ({ 
    ... provided,
    zIndex: 0,
    alignitems: "center",
    }),
    control: (provided) => ({ 
    ...provided,
    backgroundColor: "transparent",
    border: "O limportant",
    boxShadow: "none limportant",
    minHeight: "auto",
    width: "100%",
    flexwrap: undefined,
    "&: hover": {
    border: "0 !important",
    }
    }),
    input: (provided) => ({
    ...provided,
    color:"inherit",
    }),
    option: (provided, state) => ({ 
    ...provided,
    color: "#000"
    }),
    singleValue: (provided) => ({ 
    ...provided,
    marginLeft: undefined,
    marginRight: undefined,
    }),
    valuecontainer: (provided) => ({
        ...provided,
        padding: 0,
        display: "flex",
        flexWrap: undefined,
        }),
        placeholder: (provided) => ({
        ... provided,
        margin: 0,
        }),
        menuPortal: (base) = ({ ...base, zIndex: 999999 }),
        menu: ({ width, ...css }) => ({ ...css }),
        }}
        menuPortalTarget={document.body}
        closeMenuOnScroll={(event) => {
        return event.target.id === "scrollContainer";
        }}
        {... restProps}
        />
        {children}
        </>
        );
        },
        );

        SelectBox.propTypes = {
        className: PropTypes.string,
        options: PropTypes.array,
        issearchable: PropTypes.bool,
        isMulti: PropTypes.bool,
        onchange: PropTypes.func,
        value: PropTypes.string,
        indicator: PropTypes.node,
        shape: PropTypes.oneOf (["square", "round"]),
        size: PropTypes.oneOf(["md", "xs", "sm"]),
        variant: PropTypes.oneOf(["outline", "fill"]),
        color: PropTypes.oneof (["blue_gray_100_01", "gray_400_01", "white_A700"]),
    };
    
export { SelectBox };