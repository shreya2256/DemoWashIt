import { Heading, Text, Button, Input, Img } from "../../components";
import React from "react";

export default function SignInForm(){ 
return (
<> 
{/* sign in form section */}
<div className="flex justify-center"> 
<div className="container-sm flex justify-center px-14 md:p-5 md: px-5">
<div className="flex w-[54%] flex-col items-center gap-8 rounded-[16px] border border-solid border-blue_gray-100_01 bg-gray-100 p-[30px] md:w-full sm:p-5">
<Img src="images/img_header_logo-png" alt="Logo Image" className="h-[50px] w-[222px] object-contain" />
<div className="flex flex-col items-center gap-6 self-stretch"> 
<div className="flex flex-col items-start gap-6 self-stretch"> 
<a href="#">
<Heading size="heading3x1" as="h1" className="!text-blue_gray-900">
Sign in
</Heading>
</a>
<div className="flex flex-col items-end gap-[30px] self-stretch"> 
<div className="flex flex-col items-start gap-2 self-stretch"> 
<Text as="p" className="!text-black-900">
Email Address
</Text>
<Input
shape="round"
type="email"
name="Email Input"
placeholder={`Email Address`}
className="self-stretch border border-solid border-blue_gray-100_01"
/>
</div>
<div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
<Text as="p" className=" !text-black-900">
Password
</Text >
<Input
shape="round"
type="password"
name="Password Input"
placeholder={`Password`}
className="self-stretch border border-solid border-blue_gray-100_01"
/>
</div>
<a href="#">
<Text as="p" className=" !font-medium Itext-black-900_02">
Forgot Password?
</Text>
</a>
<a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
<Button
color="deep_orange_A700"
size="2x]"
shape="round"
className="self-stretch !rounded-[26px] font-inter font-bold"
>
SIGN IN
</Button>
</a>
</div>
</div>
<div className="flex flex-wrap items-center gap-1">
<a href="#">
<Text as="p" className="!text-black-900_02">
Don't have an account?
</Text>
</a>
<a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
<Heading as="h2" className="!text-deep_orange-a700">
Sign Up
</Heading>
</a>
</div>
</ div>
</div>
</div>
</div>
</>
);
}