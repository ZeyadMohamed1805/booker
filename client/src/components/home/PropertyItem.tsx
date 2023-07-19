"use client";

import { useRouter } from "next/navigation";
import { PropertyItemProps } from "@/utils/types";

const PropertyItem = ({ count, content }: PropertyItemProps) => {
    const { push } = useRouter();
    
    return (
        <div onClick={() => push(`/hotels/${content[0]._id}`)} className="rounded-md overflow-hidden cursor-pointer shadow-lg w-[200px] max-[480px]:w-[350px] hover:scale-[1.05] duration-200">
            <img src={"https://as1.ftcdn.net/v2/jpg/00/87/67/74/1000_F_87677449_Ia7kriWg3RTu8WKEDzkuNV2KMtfBeV1m.jpg"} alt={content[0].name} className="w-full object-cover" />
            <div className="p-3">
                <h1 className="text-2xl font-semibold">
                    {
                        content[0].name
                    }
                </h1>
                <h2 className="text-xl">
                    {
                        `${count} hotels`
                    }
                </h2>
            </div>
        </div>
    )
}

export default PropertyItem