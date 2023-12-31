"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { HomeComponentsProps } from "@/utils/types";

const PopularItem = ({ content }: HomeComponentsProps) => {
    const { push } = useRouter();
    
    return (
        <div onClick={() => push(`/hotels/${content._id}`)}>
            <div className="relative text-customWhite rounded-md overflow-hidden max-[880px]:w-full w-[400px] shadow-lg cursor-pointer hover:scale-[1.05] duration-200">
                <div className="w-full h-full absolute bg-black bg-opacity-20" />
                <Image src={content.photos[0]} width={880} height={200} alt={content.name} className="min-w-full object-cover aspect-[3/2]" />
                <div>
                    <h1 className="absolute bottom-12 left-10 text-2xl font-semibold" style={{textShadow: "2px 2px 2px black"}}>
                        {
                            content.name
                        }
                    </h1>
                    <h2 className="absolute bottom-5 left-10 text-xl" style={{textShadow: "2px 2px 2px black"}}>
                        {
                            content.city
                        }
                    </h2>
                </div>
            </div>
        </div>
    )
}


export default PopularItem;