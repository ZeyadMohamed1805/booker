"use client";

import { useRouter } from "next/navigation";
import { FeatureItemProps } from "@/utils/types";

const FeatureItem = ({ count, content }: FeatureItemProps) => {
    const { push } = useRouter();
    
    return (
        <div onClick={() => push(`/hotels/${content._id}`)}>
            <div className="relative text-customWhite rounded-md overflow-hidden max-[880px]:w-full w-[400px] shadow-lg cursor-pointer hover:scale-[1.05] duration-200">
                <img src={content.photos[0]} alt={content.name} className="w-full object-cover aspect-[3/2]" />
                <div>
                    <h1 className="absolute bottom-12 left-10 text-2xl font-semibold">
                        {
                            content.name
                        }
                    </h1>
                    <h2 className="absolute bottom-5 left-10 text-xl">
                        {
                            content.city
                        }
                    </h2>
                </div>
            </div>
        </div>
    )
}


export default FeatureItem;