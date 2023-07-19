"use client";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation, faCalendar, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { useState } from "react";
import Option from "@/components/layouts/Option";
import { OptionsType } from "@/utils/types";
import { useRouter } from "next/navigation";

const Search = ({ page, params }: any) => {
    const [ openDate, setOpenDate ] = useState(false);
    const [ openOptions, setOpenOptions ] = useState(false);
    const [ options, setOptions ] = useState<OptionsType>({ Adults: params ? params.options.split(",")[1] : 0, Children: params ? params.options.split(",")[3] : 0, Rooms: params ? params.options.split(",")[5] : 0 });
    const [ date, setDate ] = useState<any>([{ startDate: params ? new Date(params.start) : new Date(), endDate: params ? new Date(params.end) : new Date(), key: "selection" }]);
    const [ searchValue, setSearchValue ] = useState("");
    const { push } = useRouter();

    const handleOption = ( name: string, opertion: string ) => {
        setOptions( previous => (
            { ...previous, [ name ]: opertion === "+" ? ++options[name as keyof typeof options] : --options[name as keyof typeof options] }
        ) )
    }

    return (
        <div className={`w-full p-3 bg-customWhite border-4 border-solid border-customGold flex max-xl:flex-col max-xl:gap-y-3 items-center justify-around rounded-md ${page === "home" && "absolute -bottom-16 max-xl:-bottom-40"}`}>
            <div className="max-xl:w-full flex items-center gap-5">
                <FontAwesomeIcon icon={faMapLocation} className="text-2xl w-8 text-gray-400" />
                <input type="text" defaultValue={params && params.city} onChange={(event) => setSearchValue(event.target.value)} placeholder="Where are you going?" className="max-xl:w-full border-solid border-2 outline-none border-gray-400 p-2 rounded-md text-gray-400" />
            </div>
            <div className="max-xl:w-full flex items-center gap-5 relative">
                <FontAwesomeIcon icon={faCalendar} className="text-2xl w-8 text-gray-400" />
                <span suppressHydrationWarning className="max-xl:w-full text-gray-400 cursor-pointer border-solid border-2 outline-none border-gray-400 p-2 rounded-md" onClick={() => setOpenDate(previous => !previous)}>
                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {
                    openDate &&
                    <DateRange 
                        className={`top-full absolute shadow-lg z-50`}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        onChange={item => setDate([ item.selection ])}
                        ranges={date}
                        minDate={new Date()}
                    />
                }
            </div>
            <div className="max-xl:w-full flex items-center gap-5 z-20 relative">
                <FontAwesomeIcon icon={faPeopleGroup} className="text-2xl w-8 text-gray-400" />
                <span onClick={() => setOpenOptions(previous => !previous)} className="max-xl:w-full text-gray-400 cursor-pointer border-solid border-2 outline-none border-gray-400 p-2 rounded-md">
                    {`${options.Adults} Adults - ${options.Children} Children - ${options.Rooms} Rooms`}
                </span>
                {
                    openOptions &&
                    <div className=" w-80 max-xl:w-full left-0 absolute top-full bg-customWhite text-gray-400 rounded-md shadow-lg p-3 flex flex-col gap-3">
                        {
                            Object.entries(options).map((option, index) => (
                                <Option key={index} option={option} setOption={handleOption} />
                            ))
                        }
                    </div>
                }
            </div>
            <div className="max-xl:w-full max-xl:justify-center flex items-center gap-5">
                <button onClick={() => push(`/hotels?city=${searchValue}&start=${format(date[0].startDate, "MM/dd/yyyy")}&end=${format(date[0].endDate, "MM/dd/yyyy")}&options=${Object.entries(options)}`)} className="max-xl:w-full bg-customBlue text-white font-bold p-3 rounded-md cursor-pointer hover:bg-opacity-50 duration-200">
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search