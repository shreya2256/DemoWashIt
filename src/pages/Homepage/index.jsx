import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer"; 
import Header from "../../components/Header";
import PromotionalBanner from "../../components/PromotionalBanner";
import UserProfile from "../../ components/UserProfile";
import ExperienceSection from "./ExperienceSection";
import FeaturedProducts from "./FeaturedProducts";
import HeroBanner from "./HeroBanner";
import SupportSection from "./SupportSection";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const fantasticDealsList = [
{ 
userImage: "images/img_image_6.png",
headlineText: "Fantastic deals await!",
subText: "Don&#39;t miss our promotions on home appliances, audio and video products",
buttonText: "Buy now",
},
{ 
userImage: "images/img_image_6.png",
headlineText: "Be an techvolt member",
subText: "Enjoy all the membership benefits, from special discounts to exclusive services and offers",
buttonText: "Join Us",
},
{ 
userImage: "images/img_image_6_238x396-png",
headlineText: "Gift registration",
subText:"Check out redemption procedures for promotional gifts",
buttonText: "Learn More",
},
];
const spacecompletionList = [
    { 
    userImage: "images/img_image_7_318X420.png",
    headerText: "Complete your space",
    subHeaderText: "TechVolt objet Collection",
    },
    { 
    userImage: "images/img_image_7_1.png",
    headerText: "Complete your space",
    subHeaderText: "TechVolt objet Collection",
    },
    { 
    userImage: "images/img_image_7_2.png",
    headerText: "Complete your space",
    subHeaderText: "TechVolt Objet Collection",
    },
    ];

    export default function HomepagePage() {
    return ( 
    <>
    <Helmet>
    <title>Tech Deals - Explore Top Tech Discounts | TechVolt</title>
    <meta
    name="description"
    content="Discover the best deals on home appliances, audio, and video products. Join TechVolt for exclusive discounts and offers on the latest tech innovations."
    />
    </Helmet>
<div className="flex w-full flex-col items-center bg-white-a700">
{/* main header section */}
<div className="self-stretch">
<Header />
<div className="flex justify-center border-b border-solid border-gray-200 bg-white-a700 py-3.5">
<div className="container-sm flex items-center gap-1.5 md:p-5">
<Text size="textxl" as="p" className="capitalize">
Home
</Text>
< Img src="images/img_arrow_right_gray_700.svg" alt="Arrow Image" className="h-[24px] w-[24px]" />
<Text size="textxl" as="p" className="|font-medium capitalize !text-black-900_02">
Shop
</Text>
</div>
</div>
</div>

{/* hero banner section */}
<HeroBanner />

{/* promotion section */}
<div className="container-sm mt-20 md:p-5">
<div className="flex gap-6 md: flex-col">
<Suspense fallback={<div>Loading feed...</div>}>
{fantasticDealsList.map((d, index) => (
<PromotionalBanner {...d} key={"dealsList" + index} className="bg-orange-100" />
))}
</Suspense>
</div>
</div>

{/* featured products section */}
<FeaturedProducts />

{/* highlights section */}
<div className="mt-20 flex flex-col items-center self-stretch py-[30px] sm: py-5">
<div className="container-sm mb-2 md: p-5">
<Tabs
className="flex flex-col gap-12"
selectedTabClassName=" !text-black-900_02 border-deep_orange-a700 border-b-2 border-solid"
selectedTabPanelclassName="|relative tab-panel--selected"
> 
<div className="flex flex-col items-start gap-1"> 
<Heading size="heading7x1" as="h2">
HighLights
</Heading>
<TabList className="flex flex-wrap gap-[30px]"> 
<Tab className="p-3 text-[20px] font-normal tracking-[1.40px] text-black-900_02">
objet Collection
</Tab>
<Tab className="p-3 text-[20px] font-normal tracking-[1.40px] text-black-900_02">
Lifestyle Screens
</Tab>
<Tab className="p-3 text-[20px] font-normal tracking-[1.40px] text-black-900_02">Monitors</Tab>
<Tab className="p-3 text-[20px] font-normal tracking-[1.40px] text-black-900_02">Air Care</Tab>
<Tab className="p-3 text-[20px] font-normal tracking-[1.40px] text-black-900_02">OLED evo</Tab>
</TabList>
</div>
{[...Array(5)].map((_, index) => (
<TabPanel key={`tab-panel${index}`} className="absolute items-center">
<div className="w-full"> 
<div className="flex flex-col gap-12">
<div>
<div className="flex flex-col gap-6 rounded-[30px] border-2 border-solid border-gray-400 bg-gray-300_03">
<Img
src="images/img_image_7.png"
alt="Image Seven"
className="h- [566px] rounded-tl-[30px] rounded-tr-[30px] object-cover"
/>
<div className="flex flex-col items-center gap-3">
<Heading size="heading5x1" as="h3">
Complete your space
</Heading>
<Heading size="text3x1" as="h4" className=" | font-normal Itext-gray-700">
Techvolt objet Collection
</Heading>
<Button
color="deep_orange_A700"
shape="round"
className="mb- [34px] min-w-[170px] font-inter font-medium"
>
Buy now
</Button>
</div>
</div>
</div>
<div className="flex gap-12 md:flex-col">
<Suspense fallback={<div>Loading feed...</div>}>
{spaceCompletionList.map((d, index) => (
<UserProfile {...d} key={"completeList" + index} />
))}
</Suspense>
</div>
</div>
</div>
</TabPanel>
))}
</ Tabs>
</div>
</div>

{/* experience section */}
<ExperienceSection />

{/* support section */}
<SupportSection />

{/* footer section */}
<Footer className="mt-20 self-stretch" />
</div>
</>
);
}