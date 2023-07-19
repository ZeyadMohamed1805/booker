"use client";

import { useRouter } from "next/navigation";
import { GuestItemProps } from "@/utils/types";

const GuestItem = ({ content }: GuestItemProps) => {
    const { push } = useRouter();
    
    return (
        <div onClick={() => push(`/hotels/${content._id}`)} className=" w-[350px] gap-3 flex flex-col rounded-md overflow-hidden shadow-lg cursor-pointer hover:scale-[1.05] duration-200">
            <img src={"https://as2.ftcdn.net/v2/jpg/01/28/53/25/1000_F_128532563_NJZ4bVL770UPb8KtntICPtQ7vckx1EpF.jpg"} alt={content.name} className="w-full" />
            <div className="flex flex-col gap-3 p-3">
                <span className="font-semibold text-xl">
                    {
                        content.name
                    }
                </span>
                <span className="font-[500]">
                    {
                        content.city
                    }
                </span>
                <div className="flex items-center justify-between gap-2 w-full border-t-2 border-t-solid border-t-gray-300 pt-3">
                    <span>
                        {
                            `Starting from $${content.cheapestPrice}`
                        }
                    </span>
                    <div className="flex items-center gap-2">
                        <label className="bg-customGold text-customWhite rounded-md p-2">
                            {
                                `${content.rating}.0`
                            }
                        </label>
                        <span>
                            Excellent
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuestItem