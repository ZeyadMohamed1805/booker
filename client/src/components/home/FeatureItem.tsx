"use client";

import { useRouter } from "next/navigation";
import { FeatureItemProps } from "@/utils/types";
import useApi from "@/utils/useApi";

const FeatureItem = ({ index, content }: FeatureItemProps) => {
    const { push } = useRouter();
    const { data, isLoading } = useApi("hotels_cities_count", "/hotels/city?cities=berlin,madrid,london");
    
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
                            isLoading ? "Loading..." : `${data[index]} properties`
                        }
                    </h2>
                </div>
            </div>
        </div>
    )
}


export default FeatureItem;