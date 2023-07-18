"use client";

import { useRouter } from "next/navigation";
import { PropertyItemProps } from "@/utils/types";

const PropertyItem = ({ content }: PropertyItemProps) => {
    const { push } = useRouter();
    
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
                        `${content.subheader} hotels`
                    }
                </h2>
            </div>
        </div>
    )
}

export default PropertyItem