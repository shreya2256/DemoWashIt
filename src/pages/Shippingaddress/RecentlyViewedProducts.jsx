import { Heading } from "../../components";
import ProductDetails4 from "../ ../ components/ProductDetails4";
import React, { Suspense } from "react";

const recommendedAppliancesList = [
{ 
productImage: "images/img_ image_ 6_238x396-png",
productDescription: "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
productReviewcount: "3(122)",
productMRPLabel: "MRP",
productoldPrice: "85990",
productDiscount: "46% Off",
productPrice: "17,800",
addToBasketButton: "Add To Basket",
},
{ 
productImage: "images/img_ image_3_1.png",
productDescription: "Ultra-Efficient Washing Machine - Energy Star Rated, Eco-Cycle Technolog.",
productReviewCount: "3(122)",
productMRPLabel: "MRP",
productoldPrice: "85990",
productDiscount: "46% Off",
productPrice: "17,800",
addToBasketButton:"Add To Basket",
},
{ 
productImage:"images/img_image_3_3.png",
productDescription: "Smart Washer - Wi-Fi Connectivity, Auto-Dosing Technology, Steam Clean.",
productReviewCount: "3(122)",
productMRPLabel: "MRP",
productoldPrice: "85990",
productbiscount:40% OTT,
productprice: "17,800",
addToBasketButton: "Add To Basket",
},
{ 
productImage: "images/img_image_3_218x270.png",
productDescription: "Premium Front-Load Washer Allergen Removal Cycle, TurboWash Technology.",
productReviewcount: "3(122)",
productMRPLabel: "MRP",
productoldprice: "*85990",
productDiscount: "46% off",
productPrice: "*17,800",
addToBasketButton: "Add To Basket",
},
];

export default function RecentlyViewedProducts() {
return (
<>
{/* recently viewed products section */}
<div className="mt-[70px] flex flex-col items-center"> 
<div className="container-sm flex flex-col items-start gap-7 md:p-5">
<Heading size="heading7x1" as="h2">
Recently Viewed
</Heading>
<div className="flex gap-10 self-stretch md:flex-col">
<Suspense fallback={<div>Loading feed...</div>}>
{recommendedAppliancesList.map((d, index) => (
<ProductDetails4 {...d} key={"productList" + index} />
))}
</Suspense>
</div>
</div>
</div>
</>
);
}