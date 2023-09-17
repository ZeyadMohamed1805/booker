"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { HomeComponentsProps } from "@/utils/types";

const RecentItem = ({ content }: HomeComponentsProps) => {
    const { push } = useRouter();
    
    return (
        <div onClick={() => push(`/hotels/${content._id}`)} className="rounded-md overflow-hidden cursor-pointer shadow-lg max-[680px]:w-full w-[300px] hover:scale-[1.05] duration-200">
            <Image src={content.photos[0]} width={680} height={200} alt={content.name} className="min-w-full object-cover aspect-[3/2]" />
            <div className="p-3">
                <h1 className="text-2xl font-semibold">
                    {
                        content.name
                    }
                </h1>
                <div className="w-full flex items-center justify-between gap-3">
                    <h2 className="text-xl">
                        {
                            content.city
                        }
                    </h2>
                    <label className="py-1 px-2 text-center font-semibold text-orange-400 bg-orange-100 rounded-md border-solid border-2 border-orange-400">
                        New
                    </label>
                </div>
            </div>
        </div>
    )
}

export default RecentItem;