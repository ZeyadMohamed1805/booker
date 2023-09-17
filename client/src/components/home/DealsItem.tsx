"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { HomeComponentsProps } from "@/utils/types";
import setGrade from "@/utils/setGrade";

const DealsItem = ({ content }: HomeComponentsProps) => {
    const { push } = useRouter();
    
    return (
        <div onClick={() => push(`/hotels/${content._id}`)} className="max-[880px]:w-full w-[400px] gap-3 flex flex-col rounded-md overflow-hidden shadow-lg cursor-pointer hover:scale-[1.05] duration-200">
            <Image src={content.photos[0]} width={880} height={200} alt={content.name} className="min-w-full object-cover aspect-[3/2]" />
            <div className="flex flex-col gap-3 p-3">
                <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-2xl">
                        {
                            content.name
                        }
                    </span>
                    <span className="text-xl font-semibold">
                        {
                            content.city
                        }
                    </span>
                </div>
                <div className="flex items-center justify-between gap-6 w-full border-t-2 border-t-solid border-t-gray-300 pt-3">
                    <span className="text-lg">
                        {
                            `Starting from $${content.cheapestPrice}`
                        }
                    </span>
                    <div className="flex items-center gap-3">
                        <span className="text-lg">
                            {
                                setGrade(Number(content.rating))
                            }
                        </span>
                        <label className="bg-customGold text-customWhite rounded-md p-2 font-bold">
                            {
                                content.rating
                            }
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DealsItem