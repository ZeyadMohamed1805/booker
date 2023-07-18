"use client";

import { useRouter } from "next/navigation";
import { FeatureItemProps } from "@/utils/types";

const FeatureItem = ({ content }: FeatureItemProps) => {
    const { push } = useRouter();
    
    return (
        <div onClick={() => push(`/hotels/${content.id}`)}>
            <div className="relative text-customWhite rounded-md overflow-hidden w-[350px] shadow-lg cursor-pointer hover:scale-[1.05] duration-200">
                <img src={content.image} alt={content.header} className="w-full object-cover" />
                <div>
                    <h1 className="absolute bottom-12 left-10 text-2xl font-semibold">
                        {
                            content.header
                        }
                    </h1>
                    <h2 className="absolute bottom-5 left-10 text-xl">
                        {
                            `${content.subheader} properties`
                        }
                    </h2>
                </div>
            </div>
        </div>
    )
}


export default FeatureItem;