"use client";

import { useRouter } from "next/navigation";
import { FeatureItemProps } from "@/utils/types";

const FeatureItem = ({ count, content }: FeatureItemProps) => {
    const { push } = useRouter();
    
    return (
        <div onClick={() => push(`/hotels/${content[0]._id}`)}>
            <div className="relative text-customWhite rounded-md overflow-hidden w-[350px] shadow-lg cursor-pointer hover:scale-[1.05] duration-200">
                <img src={"https://as1.ftcdn.net/v2/jpg/00/29/13/38/1000_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg"} alt={content[0].name} className="w-full object-cover" />
                <div>
                    <h1 className="absolute bottom-12 left-10 text-2xl font-semibold">
                        {
                            content[0].name
                        }
                    </h1>
                    <h2 className="absolute bottom-5 left-10 text-xl">
                        {
                            `${count} properties`
                        }
                    </h2>
                </div>
            </div>
        </div>
    )
}


export default FeatureItem;