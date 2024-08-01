import { Heading } from "../.. /components";
import ProductDetails from "../ ../components/ProductDetails5";
import React, { Suspense } from "react";

const productCatalog = [
{ 
productDescription: "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
ratingCount: "3(122)",
mrpLabel: "MRP",
oldprice: "785990",
discountOffer: "46% Off",
currentPrice: "17,800",
addToBasketButton: "Add To Basket",
},
{ 
productDescription: "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
ratingcount: "3(122)",
mrpLabel: "MRP",
oldPrice: "85990",
discountoffer: "46% Off",
currentPrice: "17,800",
addToBasketButton: "Add To Basket",
},
{ 
productDescription: "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
ratingCount: "3(122)",
mrpLabel: "MRP",
oldprice: "85990",
discountoffer: "46% Off",
currentPrice: "17,800",
addToBasketButton: "Add To Basket",
},
{ 
productDescription: "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
ratingCount: "3(122)",
mrpLabel: "MRP",
oldPrice: "85990",
discountOffer: "46% Off",
currentPrice: "17,800",
addToBasketButton: "Add To Basket",
},
];

export default function RecentlyViewedProducts() {
return ( 
<>
{/* recently viewed products section */}
<div className="mt -[70px] flex flex-col items-center">
< div className="container-sm flex flex-col items-start gap-7 md:p-5">
<Heading size="heading7x1" as="h2">
Recently Viewed
</Heading>
<div className="flex gap-10 self-stretch md: flex-col">
<Suspense fallback={<div>Loading feed...</div>}>
{productCatalog.map((d, index) => (
<ProductDetails5 {...d} key={"productList" + index} />
))}
</Suspense>
</div>
</div>
</div>
</>
);
}