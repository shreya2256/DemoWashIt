import { Heading } from "../../components";
import ProductDetails21 from "../../components/ProductDetails21";
import React, { Suspense } from "react";

const productDetailsList = [
{ 
productImage: "images/img_image_6_238x396.png",
productDescription: "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
ratingCount: "3(122)",
mrpLabel: "MRP",
oldPrice: "*85990",
discountoffer: "46% off",
currentPrice: "17,800",
addToBasketButton: "Add To Basket",
},
{ 
productImage: "images/img_image_3_1-png",
productDescription: "Ultra-Efficient Washing Machine - Energy Star Rated, Eco-Cycle Technolog•",
ratingCount: "3(122)",
mrpLabel: "MRP",
oldPrice: "85990",
discountoffer: "46% Off",
currentPrice: "17,800",
addToBasketButton: "Add To Basket",
},
{ 
productImage:"images/img_image_3_3.png",
productDescription:"Smart Washer - Wi-Fi Connectivity, Auto-Dosing Technology, Steam Clean.",
ratingCount: "3(122)",
mrpLabel: "MRP",
oldPrice: "785990",
discountoffer: "46% off",
currentPrice: "17,800",
addToBasketButton: "Add To Basket",
},
{ 
productImage: "images/img_image_3_218x270-png",
productDescription: "premium Front-Load Washer Allergen Removal Cycle, TurboWash Technology.",
ratingCount: "3(122)",
mrpLabel: "MRP",
oldPrice: "785990",
discountoffer: "46% off",
currentPrice: "*17,800",
addToBasketButton: "Add To Basket",
},
];

export default function RecentlyViewedProductsSection() {
return ( 
<>
{/* recently viewed products section */}
<div className="mt -[110px] flex flex-col items-center">
<div className="container-sm flex flex-col items-start gap-7 md:p-5">
<Heading size="heading7x1" as="h2">
Recently Viewed
</Heading>
<div className="flex gap-10 self-stretch md: flex-col"> 
<Suspense fallback={<div>Loading feed...</div>}>
{productDetailsList.map((d, index) => (
<ProductDetails21 {...d} key={"productList" + index} />
))}
</ Suspense>
</div>
</ div>
</div>
</>
);
}