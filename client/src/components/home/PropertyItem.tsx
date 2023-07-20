"use client";

import { useRouter } from "next/navigation";
import { PropertyItemProps } from "@/utils/types";

const PropertyItem = ({ count, content }: PropertyItemProps) => {
    const { push } = useRouter();
    
    return (
        <div onClick={() => push(`/hotels/${content._id}`)} className="rounded-md overflow-hidden cursor-pointer shadow-lg max-[680px]:w-full w-[300px] hover:scale-[1.05] duration-200">
            <img src={content.photos[0]} alt={content.name} className="w-full object-cover aspect-[3/2]" />
            <div className="p-3">
                <h1 className="text-2xl font-semibold">
                    {
                        content.name
                    }
                </h1>
                <h2 className="text-xl">
                    {
                        content.city
                    }
                </h2>
            </div>
        </div>
    )
}

export default PropertyItem