import { Button, Input, Text, Heading, Img, SelectBox } from "../../components";
import metadata from "libphonenumber-js/metadata.full.json";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function AccountOverviewSection() {
const countryOptions = React.useMemo(() => {
return Object. entries(metadata.countries).map(([code, data]) => { 
const callingcode = `${data[0]}${parseInt(data[10]) || ""}`;

const display = { 
code,
callingcode: `+$(callingCode}`,
imgSrc: `https://catamphetamine.github.io/country-flag-icons/3x2/${code}.svg`,
};

return {
value: callingCode,
label: (
<>
<Img src={display. imgsrc} alt="Country Flag Image" className="m1-2.5 h-[24px] w-[24px]" />
</>
),
};
},);
}, []);

return (
<>
{/* account overview section */}
<div>
{/* account navigation section */}
<Tabs
className="flex flex-col items-center"
selectedTabclassName="! text-black-900_02 font-semibold border-black-900_02 border border-solid rounded- [16px]"
selectedTabPanelclassName="p-6 sm:p-5 Irelative tab-panel--selected"
> 
<div className="container-sm flex flex-col items-center gap-[38x] md:p-5">
<div className="flex items-center justify-center self-stretch sm:flex-col"> 
<div className="flex flex-1 flex-col items-start gap-1 sm:self-stretch">
<Heading size="heading7x1" as="h1">
My Account
</Heading>
<Text size="text2xl" as="p" className="tracking-[1.40px] !text-black-900_02">
Your Account, Your Way
</Text>
</div>
<a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank">
<Button
color="deep_orange_A700"
className="min-w- [112px] rounded- [16px] border border-solid border-blue_gray-100_01"
>
Logout
</Button>
</a>
</div>
<TabList className="flex flex-wrap gap-4">
<Tab className="px-7 py-3.5 text-[16px] font-normal text-gray-700 sm: px-5">Personal Information</Tab>
<Tab className="px-7 py-3.5 text-[16px] font-normal text-gray-700 sm:px-5">My Orders</Tab>
<Tab className="px-7 py-3.5 text-[16px] font-normal text-gray-700 sm: px-5" >Manage Address</Tab>
<Tab className="px-7 py-3.5 text-[16px] font-normal text-gray-700 sm:px-5" >Payment Method</Tab>
<Tab className="self-end px-7 py-3.5 text-[16px] font-normal text-gray-700 sm:px-5">Logout</Tab>
</TabList>
{[...Array(5)].map((_, index) => (
<TabPanel key={`tab-panel${index}`} className="absolute justify-center self-stretch p-6 sm:p-5">
<div className="w-full self-stretch">
{/* account details section */}
<div className="mb-1.5 flex items-start gap-10 md: flex-col">
<div className="relative mt-1.5 h-[120px] w-[10%] content-center md:h-auto md:w-full">
<Img
src="images/img_sherlock_toy_face_low.png"
alt="Sherlock Toy Image"
className="mx-auto h-[120px] w-full rounded-[60px] object-cover"
/>
< Button
color="deep_orange_A700"
size=" sm"
className="absolute bottom-px right-px m-auto w-[38px] rounded-[18px] border-2 border-solid border-white-a700"
>
<Img src="images/img_pencil_alt_1.svg" />
</Button>
</div>
<div className="flex flex-1 flex-col gap-[34px] self-center md:self-stretch"> 
<div className="flex flex-col items-start gap-[22px]">
<div className="flex flex-col items-start gap-2.5 self-stretch">
<Heading size="text3x1" as="h2" className="|text-black-900_02">
Information
</Heading>
<div className="h-px w-full self-stretch bg-gray-300_04" />
</ div>
<div className="flex flex-col gap-[22px] self-stretch"> 
<div className="flex gap-6 md:flex-col">
<div className="flex w-full flex-col items-start gap-2">
<Text as="p" className="| text-black-900">
<span className="text-black-900">First n</span>
<span className="text-black-900" >ame</span>
<span className="text-deep_orange-a700">*</span>
</ Text>
< Input
shape="round"
type="text"
name="First Name Input"
placeholder={`Enter first name`}
className="self-stretch border border-solid border-blue_gray-100_01"
/>
</div>
<div className="flex w-full flex-col items-start justify-center gap-1.5"> 
<Text as="p" className="! text-black-900">
<span className="text-black-900">Last name</span>
<span className="text-deep_orange-a700">*</ span>
</Text>
<Input
shape="round"
type="text"
name="Last Name Input"
placeholder={`Enter last name`}
className="self-stretch border border-solid border-blue_gray-100_01"
/>
</div>
</div>
<div className="flex gap-6 md:flex-col">
<div className="flex w-full flex-col items-start gap-2">
<Text as="p" className=" 1 text-black-900">
<span className="text-black-900" >Email</span>
<span className="text-deep_orange-a700">*</span>
</Text>
<Input
shape="round"
type=" email"
name="Email Input"
placeholder={`Enter email`}
className="self-stretch border border-solid border-blue_gray-100_01"
/>
</div>
<div className="flex w-full flex-col items-start justify-center gap-1.5">
<Text as="p" className="! text-black-900">
<span className="text-black-900" >Phone</span>
<span className="text-deep_orange-a700">*</span>
</ Text>
<div className="flex h-[48px] items-center justify-center self-stretch rounded-[24px] border border-solid border-blue_gray-100_01 bg-white-a700 px-1"> 
< SelectBox
options={countryOptions}
defaultValue={countryOptions.find((option) => option.value === "91" )}
className="h-[24px] items-center justify-center"
indicator={ 
<Img
src="images/img_arrow_down_black_900_01. svg"
alt="Dropdown Arrow"
className="m1-2 h-[16px] w-[16px]"
/>
}
/>
<div className="m1-2 h-[24px] w-px bg-gray-500_01" />
<input
type="tel"
name="Phone Number Input"
placeholder="Enter phone number"
className="ml-3.5 flex h-[20px] flex-grow items-center justify-center pr-[34px] text-[14x] text-gray-700 sm: pr-5"
/>
</div>
</div>
</div>
</div>
<Button
color="deep_orange_A700"
size="2xl"
shape="round"
className="min-w- [128px] !rounded-[26px] font-inter font-bold"
>
Update
</Button>
</div>
<div className="flex flex-col gap-[22px]"> 
<div className="flex flex-col items-start gap-2"> 
<Heading size="text3x1" as="h3" className="| text-black-900_02">
Security
</Heading>
<div className="h-px w-full self-stretch bg-gray-300_04"/>
</div>
<div className="flex flex-col items-start justify-center gap-1.5">
<Text as="p" className=" !text-black-900"> 
<span className="text-black-900">old Password</span>
<span className="text-deep_orange-a700">*</span>
</ Text>
< Input
shape="round"
type="password"
name="old Password Input"
placeholder={`Old Password`}
className="w- [48%] border border-solid border-blue_gray-100_01"
/>
</ div>
<div className="flex flex-col items-start gap-6">
<div className="flex gap-6 self-stretch md:flex-col">
<div className="flex w-full flex-col items-start justify-center gap-1.5">
<Text as="p" className="!text-black-900">
New Password
</ Text>
< Input
color="gray_300_02"
shape="round"
type="password"
name="New Password Input"
placeholder={`New Password`}
className="self-stretch border border-solid border-blue_gray-100_01"
/>
</div>
<div className="flex w-full flex-col items-start gap-2"> 
<Text as="p" className="| text-black-900">
Confirm Password
</ Text>
<Input
color="gray_300_02"
shape="round"
type="password"
name="Confirm Password Input"
placeholder={`Confirm Password`}
className="self-stretch border border-solid border-blue_gray-100_01"
/>
</div>
</div>
<Button
color="deep_orange_A700"
size="2x1"
shape="round"
className="min-w-[214px] rounded-[26px] font-inter font-bold"
>
Change Password
</Button>
</div>
</div>
</ div>
</div>
</div>
</TabPanel>
))}
</div>
</Tabs>
</ div>
</>
);
}