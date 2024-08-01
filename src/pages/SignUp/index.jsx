import { Helmet } from "react-helmet";
import Footer from "../../ components/Footer";
import Header from "../../components/Header";
import BreadcrumbNavigation from "./BreadcrumbNavigation";
import SignupForm from "./SignupForm";
import React from "react";

export default function SignUpPage() {
return ( 
<>
<Helmet>
<title>Create a New TechVolt Account - Sign Up Today</title>
<meta
name="description"
content="Join the TechVolt community and start exploring innovative tech products. Sign up now to enjoy exclusive offers and seamless shopping."
/>
</Helmet>
<div className="flex w-full flex-col gap-10 bg-white-a700">
{/* main navigation section */}
<div>
<Header />

{/* breadcrumb navigation section */}
<BreadcrumbNavigation />
</div>

{/* signup form section */}
<SignupForm />

{/* footer section */}
<Footer />
</div>
</>
);
}