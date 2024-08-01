import { Img, Heading, Button } from "../../components";
import ProductDetails from "../ ./components/ProductDetails3";
import React, { Suspense } from "react";

const featuredProductsGrid = [
{ 
productImage: "images/img_ image_ 3_2.png",
productDescription: "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
productReviewCount: "3(122)",
productMRPLabel: "MRP",
productoldPrice: "85990",
productDiscount: "46% off",
productPriceDrop: "Price drop by 72100",
productFinalPrice: "17,800",
addToBasketButton: "Add To Basket",
},
{ 
productImage: "images/img_image_3_2.png",
productDescription: "Ultra-Efficient Washing Machine - Energy Star Rated, Eco-cycle Technolog: ",
productReviewCount: "3(122)",
productMRPLabel: "MRP",
productoldPrice: "85990",
productDiscount: "46% off",
productPriceDrop: "Price drop by 72100",
productFinalPrice: "17,800",
addToBasketButton: "Add To Basket",
},
{ 
productImage: "images/image_3_2.png",
productDescription: "Smart Washer - Wi-Fi Connectivity, Auto-Dosing Technology, Steam Clean.",
productReviewCount: "3(122)",
productMRPLabel: "MRP",
productoldPrice:"85990",
productDiscount: "46% off",
productPriceDrop: "Price drop by 2100" ,
productFinalPrice: "17,800",
addToBasketButton: "Add To Basket",
},
{ 
productImage:"images/img image_ 3_7. png",
productDescription: "High-Capacity Laundry Machine - XXL Drum, Quick Wash Cycle, Silent Operation",
productReviewCount: "3(122)",
productMRPLabel: "MRP",
productoldPrice: "85990",
productDiscount: "46% Off",
productPriceDrop: "Price drop by R2100",
productFinalPrice: "17,800",
addToBasketButton: "Add To Basket",
},
{ 
productImage: "images/img_image_3_2.png",
productDescription: "Premium Front-Load Washer - Allergen Removal Cycle, TurboWash Technology.",
productReviewcount: "3(122)",
productMRPLabel: "MRP",
productoldPrice: "85990",
productDiscount: "46% Off",
productPriceDrop: "price drop by 72100",
productFinalprice: "*17,800",
addToBasketButton: "Add To Basket",
},
{ 
productImage:"images/img_ image_3_2.png",
productDescription: "Eco-Friendly Top-Load Washer - Water Saving Mode, PowerWash System.",
productReviewCount: "3(122)",
productMRPLabel: "MRP",
productoldPrice: "85990",
productDiscount: "46% off",
productPriceDrop: "price drop by 2100",
productFinalprice: "17,800",
addToBasketButton: "Add To Basket",
},
];

export default function ProductsSection() { 
return (
<> 
{/* products section */}
<div className="flex flex-col items-center">
<div className="container-sm flex flex-col gap-6 md:p-5">
<div className="grid grid-cols-3 justify-center gap-10 md:grid-cols-2 sm:grid-cols-1">
<Suspense fallback={<div>Loading feed...</div>}>
{featuredProductsGrid.map((d, index) => (
<a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank">
<ProductDetails3 {...d} key={"productList" + index} />
</a>
))}
</Suspense>
</div>

{/* pagination section */}
<div className="flex items-center justify-center gap-2.5">
<div className="flex flex-1 items-center justify-end">
<Img src="images/img_arrow_left.svg" alt="Left Arrow" className="h- [24px] w-[24px]" />
<Heading size="textmd" as="h1" className="! text-black-900_02">
Previous
</Heading>
</div>
<div className="flex w- [10%] items-center justify-between gap-5"> 
<Heading size="textmd" as="h2" className="m1-2.5 !text-black-900_02">
1
</Heading>
<Button
color="gray_300_06"
size="md"
className="min-w-[48px] rounded-[10px] border border-solid border-black-900_02 font-medium"
>
2
</Button>
<Heading size="textmd" as="h3" className="!text-black-900_02">
3
</Heading>
<Heading size="textmd" as="h4" className="!text-black-900_02">
4
</Heading>
</div>
<div className="flex items-center">
<Heading size="textmd" as="h5" className="! text-black-900_02">
Next
</Heading>
<Img src="images/img_arrow_right.svg" alt="Right Arrow" className="h- [24px] w-[24px]" />
</div>
</div>
</div>
</div>
</>
);
}