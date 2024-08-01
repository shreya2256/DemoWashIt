    import { Text,Img} from "../../components";
    import React from "react";

    export default function BreadcrumbSection() {
    return (
    <> 
    {/* breadcrumb section */}
    <div>
    <div className="flex justify-center border-b border-solid border-gray-200 bg-white-a700 py-3.5"> 
    <div className="container-sm flex items-center gap-1.5 md:p-5">
    <Text size="textxl" as="p" className="capitalize">
    Home
    </Text>
    <Img src="images/img_arrow_right_gray_700.svg" alt="Arrow Image" className="h-[24px] w-[24px]" /> 
    <Text size="textxl" as="p" className="!font-medium capitalize Itext-black-900_02">
    Profile
    </Text>
    </div>
    </div>
    </div>
    </>
    );
}