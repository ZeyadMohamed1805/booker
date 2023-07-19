"use client";

import { FilterItem, Search } from "@/components";
import { filterItems } from "@/utils/constants";

const Hotels = ({ params, searchParams }: any) => {
    console.log(searchParams)
    return (
        <>
            <div className="w-full flex justify-center p-5">
                <div className="w-full max-w-[1400px] flex-col flex gap-3">
                    <Search params={searchParams} />
                    <div className="w-full  max-w-[1400px] flex flex-col gap-6">
                        {
                            filterItems.map(item => (
                                <FilterItem key={item.id} content={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
  
  export default Hotels;