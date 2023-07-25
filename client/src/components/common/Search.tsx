"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation, faSort, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useApi from "@/utils/useApi";

const Search = ({ page, params }: any) => {
    const { data, isLoading } = useApi("hotels_cities", "/hotels/cities");
    const [ sort, setSort ] = useState(params?.sort || "alphabetically");
    const [ city, setCity ] = useState(params?.city || "");
    const [ priceRange, setPriceRange ] = useState({ from: params?.range.split(",")[0] || 0, to: params?.range.split(",")[1] || 999999999});
    const { push } = useRouter();

    return (
        <div className={`w-full p-3 bg-customWhite border-4 border-solid border-customGold flex max-xl:flex-col max-xl:gap-y-3 items-center justify-around rounded-md ${page === "home" && "absolute -bottom-16 max-xl:-bottom-40"}`}>
            <div className="w-1/4 max-xl:w-full flex items-center gap-5 relative">
                <FontAwesomeIcon icon={faMapLocation} className="text-2xl w-8 text-gray-400" />
                <select name="sort" defaultValue={params?.city} onChange={(event) => setCity(event.target.value)} className="w-full bg-customWhite text-gray-400 cursor-pointer border-solid border-2 outline-none border-gray-400 p-2 rounded-md">
                    <option value="">
                        All
                    </option>
                    {
                        data &&
                        data.map((city: string, index: number) => (
                            <option key={index} value={city}>
                                { city }
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="w-1/4 max-xl:w-full flex items-center gap-5 relative">
                <FontAwesomeIcon icon={faSort} className="text-2xl w-8 text-gray-400" />
                <select name="sort" defaultValue={params?.sort} onChange={(event) => setSort(event.target.value)} className="w-full bg-customWhite text-gray-400 cursor-pointer border-solid border-2 outline-none border-gray-400 p-2 rounded-md">
                    <option value="alphabetically">
                        Alphabetically
                    </option>
                    <option value="newest">
                        Newest
                    </option>
                    <option value="oldest">
                        Oldest
                    </option>
                    <option value="highest_price">
                        Highest Price
                    </option>
                    <option value="lowest_price">
                        Lowest Price
                    </option>
                    <option value="highest_rating">
                        Highest Rating
                    </option>
                    <option value="lowest_rating">
                        Lowest Rating
                    </option>
                </select>
            </div>
            <div className="max-xl:w-full flex items-center w-1/4 gap-5 z-20 relative">
                <FontAwesomeIcon icon={faDollarSign} className="text-2xl w-8 text-gray-400" />
                <div className="w-full flex items-center gap-3">
                    <input type="text" defaultValue={params?.range.split(",")[0] > 0 ? params?.range.split(",")[0] : null} onChange={(event) => setPriceRange({ from: Number(event.target.value), to: Number(event.target.value) })} className="w-1/2 max-xl:w-full border-solid border-2 outline-none border-gray-400 p-2 rounded-md text-gray-400" placeholder="From" />
                    <input type="text" defaultValue={params?.range.split(",")[1] < 999999999 ? params?.range.split(",")[1] : null} onChange={(event) => setPriceRange({ from: priceRange.from, to: Number(event.target.value) })} className="w-1/2 max-xl:w-full border-solid border-2 outline-none border-gray-400 p-2 rounded-md text-gray-400" placeholder="To" />
                </div>
            </div>
            <div className="max-xl:w-full max-xl:justify-center flex items-center gap-5">
                <button onClick={() => push(`/hotels?city=${city}&sort=${sort}&range=${priceRange.from},${Boolean(priceRange.to) ? priceRange.to : 999999999}`)} className="max-xl:w-full bg-customBlue text-white font-bold p-3 rounded-md cursor-pointer hover:bg-opacity-50 duration-200">
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search