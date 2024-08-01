import { Helmet } from "react-helmet";
import Footer from "../ ../ components/Footer";
import Header from "../../ components/Header";
import AccountOverviewSection from "./AccountOverviewSection";
import BreadcrumbSection from "./BreadcrumbSection";
import React from "react";

export default function DeliveredMyOrdersOnePage(){ 
return ( 
<> 
<Helmet>
<title>Order History - Delivered Items | TechVolt</title>
<meta
name="description"
content="Review your delivered orders from TechVolt. Explore your purchase history, view details of LG washing machines, and manage your account with ease."
/>
</Helmet>
<div className="flex w-full flex-col gap-9 bg-white-a700">
{/* header section */}
<div>
<Header/>

{/* breadcrumb section */}
<BreadcrumbSection />
</div>

{/* account overview section */}
<AccountOverviewSection />

{/* footer section */}
<Footer />
</div>
</>
);
}