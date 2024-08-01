import { Heading, Text, Button, CheckBox, Input, Img, SelectBox } from "../../components";
import metadata from "libphonenumber-js/metadata.full.json";
import React from "react";

export default function SignupForm() { 
const countryOptions = React.useMemo (() => {
return Object. entries(metadata.countries).map(([code, data]) => {
const callingcode = `${data[0]}${parseInt(data[10]) || ""}`;

const display = { 
code,
callingcode: `+$(callingcode}`,
imgSrc: `https://catamphetamine.github. io/country-flag-icons/3x2/${code}.svg`,
};

return {
value: callingCode,
label: (
<>
<Img src={display.imgSrc} alt="Flag Image" className="m1-2.5 h-[24px] w-[24px]" />
</>
),
};
});
}, []);

return( 
<> 
{/* signup form section */}
<div className="flex justify-center">
<div className="container-sm flex justify-center px-14 md:p-5 md:px-5">
<div className="flex w-[54%] flex-col items-center gap-8 rounded- [16px] border border-solid border-blue_gray-100_01 bg-gray-100 p-8 md:w-full sm:p-5"> 
<div className="flex items-center gap-3">
<Img src="images/img_clock.svg" alt="clock Image" className="h-[50px]" />
<Heading size="heading4x]" as="h1" className="tracking-[2.24px] |text-gray-600">
TechVolt
</Heading>
</div>
<div className="flex flex-col items-center gap-6 self-stretch"> 
<div className="flex flex-col items-start self-stretch"> 
<a href="#">
<Heading size="heading3x1" as="h2" className="!text-blue_gray-900">
Sign Up
</Heading>
</a>
<div className="mt-6 flex flex-col gap-[30px] self-stretch">
<div className="flex gap-4 md:flex-col">
<div className="flex w-full flex-col items-start gap-2">
<Text as="p" className="!text-black-900">
First Name
</Text>
<Input
shape="round"
type="text"
name="First Name Input"
placeholder={`First name`}
className="self-stretch border border-solid border-blue_gray-100_01"
/>
</div>
<div className="flex w-full flex-col items-start justify-center gap-1.5">
<Text as="p" className="!text-black-900">
Last Name
</Text>
<Input
shape="round"
type="text"
name="Last Name Input"
placeholder={`Last name`}
className="self-stretch border border-solid border-blue_gray-100_01"
/>
</div>
</div>
<div className="flex gap-4 md: flex-col">
<div className="flex w-full flex-col items-start gap-2">
<Text as="p" className="!text-black-900">
Email Address
</Text>
<Input
shape="round"
type=" email"
name="Email Input"
placeholder={`Email Address`}
className="self-stretch border border-solid border-blue gray-100 01"
/>
</div>
<div className="flex w-full flex-col items-start justify-center gap-1.5">
<Text as="p" className="! text-black-900">
<span className="text-black-900" >Phone</ span>
<span className="text-deep orange-a700">*</span>
</Text>
<div className="flex h-[48px] items-center justify-center self-stretch rounded-[24px] border border-solid border-blue_gray-100_01 bg-white-a700 px-1">
<SelectBox
options={countryOptions}
defaultValue={countryOptions. find((option) => option.value === "91" )}
className="h-[24px] items-center justify-center"
indicator={ 
<Img
src="images/img.arrow_down_black_900_01.svg"
alt="Arrow Image"
className="ml-2 h-[16px] w-[16px]"
/>
}
/>
<div className="ml-2 h-[24px] w-px bg-gray-500_01" />
<input
type="tel"
name="Phone Number Input"
placeholder="Enter phone number"
className="m1-3.5 flex h-[20px] flex-grow items-center justify-center pr-[34px] text-[14px] text-gray-700 sm:pr-5"
/>
</ div>
</div>
</div>
</div>
<div className="mt-8 flex flex-col items-start justify-center gap-1.5 self-stretch">
<Text as="p" className="!text-black-900">
Password
</ Text>
<Input
shape="round"
type="password"
name="Password Input"
placeholder={`Password`}
className="self-stretch border border-solid border-blue_gray-100_01"
/>
</div>
<CheckBox
name="Terms Checkbox"
label="By signing up I agree to the Terms & Conditions and Privacy Policy"
id="TermsCheckbox"
className="mt-10 gap-2 text-[16px] text-gray-700"
/>
<a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank"> 
<Button
color="deep_orange_A700"
size="2x]"
shape="round"
className="mt-9 self-stretch rounded-[26px] font-inter font-bold"
>
SIGN UP
</Button>
</a>
</div>
<div className="flex flex-wrap gap-1">
<Text as="p" className="self-end Itext-black-900_02">
Already have account?
</Text>
<a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank">
<Heading as="h3" className=" !text-deep_orange-a700">
Sign In
</Heading>
</a>
</div>
</div>
</div>
</div>
</div>
</>
);
}