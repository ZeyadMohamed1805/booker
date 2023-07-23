"use client";

import PopularItem from "../home/PopularItem";
import useApi from "@/utils/useApi";

const Suggested = ({ city }: any) => {
    const { data, isLoading } = useApi("suggested_hotels", `/hotels/city?cities=${city}`);
    
    return (
        <div className="w-full max-w-[1400px] p-5">
            <div className="w-full flex flex-col gap-6">
                <h1 className="text-3xl font-bold">
                    Other Hotels In { city }
                </h1>
                <div className="w-full flex items-center justify-between gap-3">
                    {
                        isLoading ?
                        <h1 className="text-xl font-bold">
                            Loading...
                        </h1> :
                        data[0].map((hotel: any) => (
                            <PopularItem key={hotel._id} content={hotel} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Suggested;