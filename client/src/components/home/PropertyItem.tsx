"use client";

import { useRouter } from "next/navigation";
import { PropertyItemProps } from "@/utils/types";
import useApi from "@/utils/useApi";

const PropertyItem = ({ index, content }: PropertyItemProps) => {
    const { push } = useRouter();
    const { data, isLoading } = useApi("hotels_by_types", "/hotels/type?types=hotels,apartments,resorts,villas,cabins");
    
    return (
        <div onClick={() => push(`/hotels/${content.id}`)} className="rounded-md overflow-hidden cursor-pointer shadow-lg w-[200px] max-[480px]:w-[350px] hover:scale-[1.05] duration-200">
            <img src={content.image} alt={content.header} className="w-full object-cover" />
            <div className="p-3">
                <h1 className="text-2xl font-semibold">
                    {
                        content.header
                    }
                </h1>
                <h2 className="text-xl">
                    {
                        isLoading ? "Loading..." : `${data[index]} hotels`
                    }
                </h2>
            </div>
        </div>
    )
}

export default PropertyItem