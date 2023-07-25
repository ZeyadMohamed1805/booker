"use client";

import { HotelComponentsProps } from "@/utils/types";
import PopularItem from "../home/PopularItem";
import useApi from "@/utils/useApi";

const Suggested = ({ content }: HotelComponentsProps) => {
    const { data, isLoading } = useApi("suggested_hotels", `/hotels/city?cities=${content.city}`);
    
    return (
        <div className="w-full max-w-[1400px] p-5">
            <div className="w-full flex flex-col gap-6">
                <h1 className="text-3xl font-bold">
                    Other Hotels In { content.city }
                </h1>
                <div className="w-full flex flex-wrap justify-between gap-10 max-[880px]:justify-center">
                    {
                        isLoading ?
                        <h1 className="text-xl font-bold">
                            Loading...
                        </h1> :
                        data &&
                        data[0].filter((hotel: any) => hotel.name !== content.name).map((hotel: any) => (
                            <PopularItem key={hotel._id} content={hotel} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Suggested;