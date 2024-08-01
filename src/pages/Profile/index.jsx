import { Helmet } from "react-helmet";
import Footer from "../ ../components/Footer";
import Header from "../../components/Header";
import AccountOverviewSection from "-/AccountOverviewSection";
import BreadcrumbSection from "./BreadcrumbSection";
import React from "react";

export default function ProfilePage(){
return (
<>
<Helmet>
<title>User Profile - Manage Your Account | TechVolt</title>
<meta
name="description"
content="Access and update your personal information, manage addresses, and view your orders on TechVolt. Your account, your way for seamless tech exploration."
/>
</Helmet>
<div className="flex w-full flex-col gap-9 bg-white-a700">
{/* header section */}
<div>
<Header />

{/* breadcrumb section */}
<BreadcrumbSection />
</div>

{/* account overview section */}
<AccountOverviewSection />

{/* footer section */}
< Footer />
</div>
</>
);
}