import StepShoppingCart from "../../components/StepShoppingCart";
import React, { Suspense } from "react";

const checkoutSteps = [
{ stepNumber: "01", shoppingCartText: "Shopping cart" },
{ stepNumber: "02", shoppingCartText: "Shipping address" },
{ stepNumber: "03", shoppingCartText: "Payment info" },
];

export default function CheckoutSteps () {
return ( 
<>
{/* checkout steps section */}
<div className="mt-10 flex pl-[140px] pr-14 md: flex-col md: px-5">
<Suspense fallback={<div>Loading feed...</div>}>
{checkoutSteps.map((d, index) => (
<StepShoppingCart {...d} key={"liststepnumber" + index} className="w- [30%]" />
))}
</Suspense>
</div>
</>
);
}