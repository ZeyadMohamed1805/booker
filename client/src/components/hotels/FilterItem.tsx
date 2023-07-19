"use client";

import { useRouter } from "next/navigation";

const FilterItem = ({ content }: any) => {
    const { push } = useRouter();

    return (
    <div className="border-solid border-customBlue border-4 p-3 rounded-md flex gap-6 max-md:flex-col">
        <img src={"/images/features.jpeg"} alt={content.name} className="w-96 object-cover rounded-md max-lg:w-full" />
        <div className="w-full flex gap-10 max-lg:flex-col">
            <div className="flex flex-col gap-3 flex-2">
                <h1 className="text-2xl text-customBlue">
                    {
                        content.name
                    }
                </h1>
                <span>
                    {
                        `${content.distance}m from center`
                    }
                </span>
                <span className="bg-green-400 font-semibold text-customWhite w-fit p-3 rounded-md">
                    Free Airport Taxi
                </span>
                <span className="font-bold">
                    {
                        content.title
                    }
                </span>
                <span>
                    {
                        content.description
                    }
                </span>
                <span className="font-bold">
                    Free Cancellation
                </span>
                <span>
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="flex flex-col justify-between flex-1 min-w-fit gap-3">
                <div className="flex justify-between">
                    <span className="text-2xl">
                        Excellent
                    </span>
                    <label className="bg-customGold text-customWhite p-3 font-bold rounded-md border-none">
                        {
                            content.rating
                        }
                    </label>
                </div>
                <div className="text-right flex flex-col items-end gap-3">
                    <span className="text-3xl">
                        {
                            `$${content.cheapestPrice}`
                        }
                    </span>
                    <span className="text-gray-400">
                        Includes taxes and fees
                    </span>
                    <button onClick={() => push(`/hotels/${content.id}`)} className="w-full bg-customBlue text-customWHite font-bold p-3 text-customWhite rounded-md hover:bg-opacity-50 duration-200">
                        See Availability
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FilterItem;