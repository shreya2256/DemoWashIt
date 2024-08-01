import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text, SelectBox, CheckBox } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductDetails2 from "../../components/ProductDetails2";
import React, { Suspense } from "react";

const productDetailsGrid = [
{
productDescription: "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
ratingCount: "3(122)",
mrpLabel: "MRP",
oldPrice: "85990",
discountOffer: "46% Off",
currentPrice: "17,800",
addToBasketButton: "Add To Basket",
},
{ 
productDescription: "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
ratingCount: "3(122)",
mrpLabel: "MRP",
oldPrice: "85990",
discountoffer: "46% Off",
currentPrice:"17, 800",
addToBasketButton: "Add To Basket"
},
{ 
productDescription: "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
ratingCount: "3(122)",
mrpLabel: "MRP",
oldPrice: "85990",
discountOffer: "46% Off",
currentPrice:"17,800",
addToBasketButton: "Add To Basket"
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
{
productDescription: "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
ratingCount: "3(122)",
mrpLabel: "MRP",
oldPrice: "85990",
discountOffer: "46% Off",
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
{ 
productDescription: "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
ratingCount: "3(122)",
mrpLabel: "MRP",
oldPrice: "*85990",
discountOffer: "46% Off",
currentPrice: "17,800",
addToBasketButton: "Add To Basket",
},
{
    productDescription: "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
    ratingCount:"3(122)",
    mrpLabel: "MRP",
    oldPrice: "85990",
    discountOffer: "46% Off",
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
    const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option" },
    ];

    export default function ProductGridPage() { 
    return (
    <>
    <Helmet>
    <title>Shop Quality Appliances - Product List | TechVolt</title>
    <meta
    name="description"
    content="Browse our extensive range of top-rated appliances. Find the perfect product for your home with our smart filters and unbeatable prices."
    />
</Helmet >
<div className="flex w-full flex-col gap-10 bg-white-a700"> 
{/* main header section */}
<div>
<Header />

{/* breadcrumb navigation section */}
<div className="flex justify-center border-b border-solid border-gray-200 bg-white-a700 py-3.5">
<div className="container-sm flex items-center gap-1.5 md:p-5">
<Text size="textxl" as="p" className="capitalize">
Home
</Text>
<Img src="images/img_arrow_right_gray_700.svg" alt="Arrow Image" className="h-[24px] w-[24px]" />
<Text size="textxl" as="p" className=" |font-medium capitalize Itext-black-900_02">
Shop
</Text>
</div>
</div>
</div>

{/* product listing section */}
<div className="flex justify-center">
<div className="container-sm flex items-start justify-center gap-10 md:flex-col md:p-5">
<div className="flex w-[18%] flex-col items-start gap-3.5 md:w-full"> 
<Heading size="headingmd" as="h1" className="mt-1.5 !font-bold">
Filters
</Heading>
<div className="flex flex-col gap-1.5 self-stretch"> 
<div className="flex flex-col items-start gap-3.5">
<div className="flex justify-between gap-5 self-stretch border-t border-solid border-gray-400_01 py-2.5">
<Text as="p" className="! font-medium Itext-black-900">
Brands
</Text>
<Img src="images/img_arrow_up_black_900_02.svg" alt="Arrow Up" className="h-[24px] w-[24px]" />
</div>
<div className="flex flex-col items-start gap-[18px] self-stretch">
<CheckBox
name="LG Checkbox"
label="LG"
id="LGCheckbox"
className="gap-4 text-[16px] text-gray-700"
/>
<CheckBox
name="Samsung Checkbox"
label="Samsung"
id="SamsungCheckbox"
className="gap-4 text-[16px] text-gray-700"
/>
<CheckBox
name="Panasonic Checkbox"
label="Panasonic"
id="PanasonicCheckbox"
className="gap-4 text-[16px] text-gray-700"
/>
<CheckBox
name="Whirlpool Checkbox"
label="Whirlpool"
id="WhirlpoolCheckbox"
className="gap-4 text-[16px] text-gray-700"
/>
</div>
<a href="#" className="mb-1.5">
<Text as="p" className=" !text-black-900 underline">
See all
</Text>
</a>
</div>
<SelectBox
color="gray_400_01"
shape="square"
indicator={
<Img src="images/img_arrow_up_black_900_02.svg" alt="Arrow Down" className="h-[24px] w-[24px]" />
}
name="Price Dropdown"
placeholder={`Price range`}
options={dropDownOptions}
className="font-medium"
/>
<SelectBox
color="gray_400_01"
shape="square"
indicator={
<Img src="images/img_arrow_up_black_900_02.svg" alt="Arrow Down" className="h-[24px] w-[24px]" />
}
name="Condition Dropdown"
placeholder={`Condition`}
options={dropDownOptions}
className="font-medium"
/>
< SelectBox
color="gray_400_01"
shape="square"
indicator={ 
<Img src="images/img_arrow_up_black_900_02.svg" alt="Arrow Down"className="h-[24px] w-[24px]" />
}
name="Ratings Dropdown"
placeholder={`Ratings`}
options={dropDownOptions}
className="font-medium"
/>
</div>
</div>
<div className="flex flex-1 flex-col items-start gap-[22px] self-center md: self-stretch">
<Text as="p" className="! font-medium !text-black-900">
34 Results
</Text>
<div className="flex flex-col gap-6 self-stretch">
<div className="grid grid-cols-3 justify-center gap-10 gap-y-10 md:grid-cols-2 sm:grid-cols-1">
<Suspense fallback={<div>Loading feed...</div>}>
{productDetailsGrid.map((d, index) => (
<a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank"> 
<ProductDetails2 {...d} key={"productRow" + index} />
</a>
))}
</Suspense>
</ div>
<div className="flex items-center justify-center gap-2.5">
<div className="flex flex-1 items-center justify-end"> 
<Img src="images/img_arrow_left.svg" alt="Arrow Left" className="h-[24px] w-[24px]" />
<Heading size="textmd" as="h2" className=" !text-black-900_02">
Previous
</Heading>
</div>
<div className="flex w-[14%] items-center justify-between gap-5">
<Heading size="textmd" as="h3" className="m1-2.5 |text-black-900_02">
1
</Heading>
<Button
color="gray_300_06"
size="md"
className="min-w-[44px] rounded-[10px] border border-solid border-black-900_02 font-medium"
> 
2
</Button>
<Heading size="textmd" as="h4" className=" !text-black-900_02">
3
</Heading>
<Heading size="textmd" as="h5" className="!text-black-900_02">
4
</Heading>
</div>
<div className="flex items-center">
<Heading size="textmd" as="h6" className="|text-black-900_02">
Next
</Heading>
<Img src="images/img_arrow_right.svg" alt="Arrow Right" className="h-[24px] w-[24px]" />
</div>
</div>
</div>
</div>
</div>
</div>

{/* main footer section */}
<Footer />
</div>
</>
);
}