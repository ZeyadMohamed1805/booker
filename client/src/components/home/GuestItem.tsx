"use client";

import { useRouter } from "next/navigation";
import { GuestItemProps } from "@/utils/types";

const GuestItem = ({ content }: GuestItemProps) => {
    const { push } = useRouter();
    
    return (
        <div onClick={() => push(`/hotels/${content.id}`)} className=" w-[350px] gap-3 flex flex-col rounded-md overflow-hidden shadow-lg cursor-pointer hover:scale-[1.05] duration-200">
            <img src={content.image} alt={content.header} className="w-full" />
            <div className="flex flex-col gap-3 p-3">
                <span className="font-semibold text-xl">
                    {
                        content.header
                    }
                </span>
                <span className="font-[500]">
                    {
                        content.subheader
                    }
                </span>
                <div className="flex items-center justify-between gap-2 w-full border-t-2 border-t-solid border-t-gray-300 pt-3">
                    <span>
                        {
                            `Starting from $${content.price}`
                        }
                    </span>
                    <div className="flex items-center gap-2">
                        <label className="bg-customGold text-customWhite rounded-md p-2">
                            {
                                content.rating
                            }
                        </label>
                        <span>
                            {
                                content.grade
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuestItem