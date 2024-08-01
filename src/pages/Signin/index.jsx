import { Helmet } from "react-helmet";
import { Text, Img } from "../../ components";
import Footer from "../../ components/Footer";
import Header from "../../ components/Header";
import SignInForm from "./SignInForm";
import React from "react";

export default function SigninPage() {
return ( 
<>
<Helmet>
<title>Sign In to Your TechVolt Account</title>
<meta
name="description"
content="Access your TechVolt account to shop the latest tech accessories. Enjoy a personalized shopping experience with easy sign-in options."
/>
</Helmet>
<div className="flex w-full flex-col gap-10 bg-white-a700">
{/* main header section */}
<div>
<Header />

{/* breadcrumb section */}
<div className="flex justify-center border-b border-solid border-gray-200 bg-white-a700 py-3.5">
<div className="container-sm flex items-center gap-1.5 md:p-5">
<Text size="textxl" as="p" className="capitalize">
Home
</Text>
<Img src="images/img_arrow_right_gray_700.svg" alt="Arrow Image" className="h-[24px] w-[24px]" />
<a href="#">
<Text size="textxl" as="p" className="!font-medium capitalize !text-black-900 02"> 
Sign in
</Text>
</a>
</div>
</div>
</div>

{/* sign in form section */}
<SignInForm />

{/* footer section */}
< Footer />
</div>
</>
);
}