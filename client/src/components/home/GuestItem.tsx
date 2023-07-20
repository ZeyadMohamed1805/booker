"use client";

import { useRouter } from "next/navigation";
import { GuestItemProps } from "@/utils/types";

const GuestItem = ({ content }: GuestItemProps) => {
    const { push } = useRouter();
    
    return (
        <div onClick={() => push(`/hotels/${content._id}`)} className="max-[880px]:w-full w-[400px] gap-3 flex flex-col rounded-md overflow-hidden shadow-lg cursor-pointer hover:scale-[1.05] duration-200">
            <img src={content.photos[0]} alt={content.name} className="w-full object-cover aspect-[3/2]" />
            <div className="flex flex-col gap-3 p-3">
                <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-2xl">
                        {
                            content.name
                        }
                    </span>
                    <span className="font-[500]">
                        {
                            content.city
                        }
                    </span>
                </div>
                <div className="flex items-center justify-between gap-2 w-full border-t-2 border-t-solid border-t-gray-300 pt-3">
                    <span>
                        {
                            `Starting from $${content.cheapestPrice}`
                        }
                    </span>
                    <div className="flex items-center gap-2">
                        <span>
                            Excellent
                        </span>
                        <label className="bg-customGold text-customWhite rounded-md p-2">
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

export default GuestItem