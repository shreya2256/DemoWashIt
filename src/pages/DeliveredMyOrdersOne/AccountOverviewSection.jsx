import { SelectBox, Img, Text, ChipView, Button, Heading } from "../../components";
import ProductDetails6 from "../ ../ components/ProductDetails6";
import React from "react";

const dropDownOptions = [
{ label: "Option1", value: "option1" },
{ label: "Option2", value: "option?" },
{ label: "Option3", value: "option?" },
];

export default function AccountOverviewSection(){
const [chipOptions, setChipOptions] = React.useState(() => [
{ value: 1, label: `Personal Information` },
{ value: 2, label: `My Orders `},
{ value: 3, label: `Manage Address` },
{ value: 4, label: `Payment Method` },
]);
const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

return (
<>
{/* account overview section */}
<div className="flex flex-col items-center">
<div className="container-sm flex flex-col gap-10 md: p-5">
<div className="flex flex-col gap-9"> 
<div className="flex items-center justify-center sm:flex-col"> 
<div className="flex flex-1 flex-col items-start gap-1 sm: self-stretch"> 
<Heading size="heading7x]" as="h1">
My Account
</Heading>
<Text size="text2x]" as="p" className="tracking-[1.40px] !text-black-900_02">
Your Account, Your Way
</Text>
</div>
<a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank"> 
<Button
color="deep_orange_A700"
className="min-w-[112px] rounded-[16px] border border-solid border-blue_gray-100_01"
>
Logout
</Button>
</a>
</div>
<ChipView
options={chipOptions}
setOptions={setChipOptions}
values={selectedChipOptions}
setValues={setSelectedChipOptions}
className="flex flex-wrap gap-4"
> 
{(option) => (
< React.Fragment key={option.index}>
{option.isSelected ? (
<div
onClick={option. toggle}
className="flex h-[56px] min-w-[224px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[16px] border border-solid border-black -900_02 bg-white-a700 px-7 text-center text-[16px) text-black-900_02 sm:px-5"
> 
<span>{option.label}</span>
</div>
) : (
<div
onClick={option.toggle}
className="flex h-[56px] min-w-[224px] cursor-pointer flex-row items-center justify-center rounded-[16px] border border-solid border-blue_gray-100_01 bg-whitbg-white-a/00 px-7 text-center text-[Jopx) Lext-gray-760 sm:px-5"
> 
<span>{option.label}</span>
</div>
)}
</React.Fragment>
)}
</ChipView>
</div>

{/* order history section */}
<div className="rounded-[16px] border border-solid border-blue_gray-100_01 bg-gray-100 p-8 sm:p-5">
<div className="flex flex-col gap-6"> 
<div className="flex items-center md: flex-col">
<div className="flex flex-1 md:self-stretch sm:flex-col"> 
<div className="flex p-2">
<Text size="text2x1" as="p" className="self-end tracking-[1.40px] |text-black-900_02">
Arriving
</Text>
</div>
<div className="m1-3.5 flex p-2.5 sm:ml-0">
<Text size="text2xl" as="p" className="tracking-[1.40px] |text-black-900_02">
Delivered
</Text>
</div>
<div className="ml- [30px] flex border-b-2 border-solid border-deep_orange-a700 p-2.5 sm: m1-0">
<Text size="text2xl" as="p" className="tracking-[1.40px] !text-black-900_02">
Canceled & returned
</Text>
</div>
</div>
<div className="flex w-[36%] items-center justify-end gap-2 md:w-full">
<Text size="text2x]" as="p" className="self-end !font-medium !text-black-900_02">
Sort by:
</Text>
<SelectBox
size="xs"
variant="fill"
shape="round"
indicator={
<Img
src="images/img_arrowdown_black_900_02_1-svg"
alt="Arrow Down"
className="h- [16px] w-[16px]"
/>
}
name="Sort Dropdown"
placeholder={`1 month`}
options={dropDownOptions}
className="w-[22%] border border-solid border-black-900_02 font-medium"
/>
</div>
</div>
<div className="flex flex-col gap-6">
<ProductDetails6 />
<ProductDetails6 viewOrderDetails="View order details" productImage="images/img_image_4-png" />
</div>
</div>
</div>
</div>
</div>
</>
);
}