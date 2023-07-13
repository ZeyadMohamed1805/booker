"use client";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { headerList } from "@/utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation, faCalendar, faPeopleGroup, faBed, } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { useState } from "react";
import ListItem from "./ListItem";
import Option from "./Option";
import { OptionsType } from "@/utils/types";

const Header = () => {
    const [ openDate, setOpenDate ] = useState(false);
    const [ openOptions, setOpenOptions ] = useState(false);
    const [ options, setOptions ] = useState<OptionsType>({ Adults: 0, Children: 0, Rooms: 0 });
    const [ date, setDate ] = useState<any>([{ startDate: new Date(), endDate: new Date(), key: "selection" }]);

    const handleOption = ( name: string, opertion: string ) => {
        setOptions( previous => (
            { ...previous, [ name ]: opertion === "+" ? ++options[name as keyof typeof options] : --options[name as keyof typeof options] }
        ) )
    }

    return (
        <header className="bg-primary text-white flex flex-col items-center gap-10 p-5">
            <div className="w-full max-w-[1200px] relative flex flex-col gap-6">
                {/* Header List */}
                <div className="w-full">
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                        {
                            headerList.map((listItem, index) => (
                                <ListItem key={index} listItem={listItem} />
                            ))
                        }
                    </div>
                </div>
                {/* Header Text Content */}
                <div className="w-full flex flex-col gap-5 mt-5 mb-16 max-xl:mb-40">
                    <h1 className="text-3xl font-bold">
                        A lifetime of discounts? It's Genius.
                    </h1>
                    <p>
                        Get rewarded for your travels - 
                        Unlock instant savings of 10% or more with a Free Booker Account!
                    </p>
                    <button className="w-fit bg-customBlue text-white font-bold p-3 cursor-pointer rounded-md hover:bg-opacity-50 duration-200">
                        Sign In / Sign Up
                    </button>
                </div>
                {/* Header Search */}
                <div className="w-full p-3 bg-customWhite border-4 border-solid border-customGold flex max-xl:flex-col max-xl:gap-y-3 items-center justify-around rounded-md absolute -bottom-16 max-xl:-bottom-40">
                    <div className="max-xl:w-full flex items-center gap-5">
                        <FontAwesomeIcon icon={faMapLocation} className="text-2xl w-8 text-gray-400" />
                        <input type="text" placeholder="Where are you going?" className="max-xl:w-full border-solid border-2 outline-none border-gray-400 p-2 rounded-md text-gray-400" />
                    </div>
                    <div className="max-xl:w-full flex items-center gap-5">
                        <FontAwesomeIcon icon={faCalendar} className="text-2xl w-8 text-gray-400" />
                        <span suppressHydrationWarning className="max-xl:w-full text-gray-400 cursor-pointer border-solid border-2 outline-none border-gray-400 p-2 rounded-md" onClick={() => setOpenDate(previous => !previous)}>
                            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        {
                            openDate &&
                            <DateRange 
                                className="absolute top-20 max-xl:top-1/2 shadow-lg max-xl:left-0"
                                editableDateInputs={true}
                                moveRangeOnFirstSelection={false}
                                onChange={item => setDate([ item.selection ])}
                                ranges={date}
                            />
                        }
                    </div>
                    <div className="max-xl:w-full flex items-center gap-5">
                        <FontAwesomeIcon icon={faPeopleGroup} className="text-2xl w-8 text-gray-400" />
                        <span onClick={() => setOpenOptions(previous => !previous)} className="max-xl:w-full text-gray-400 cursor-pointer border-solid border-2 outline-none border-gray-400 p-2 rounded-md">
                            {`${options.Adults} Adults - ${options.Children} Children - ${options.Rooms} Rooms`}
                        </span>
                        {
                            openOptions &&
                            <div className=" w-80 max-xl:w-full max-xl:-left-0 absolute top-20 max-xl:top-3/4 bg-customWhite text-gray-400 rounded-md shadow-lg p-3 flex flex-col gap-3">
                                {
                                    Object.entries(options).map((option, index) => (
                                        <Option key={index} option={option} setOption={handleOption} />
                                    ))
                                }
                            </div>
                        }
                    </div>
                    <div className="max-xl:w-full max-xl:justify-center flex items-center gap-5">
                        <button className="max-xl:w-full bg-customBlue text-white font-bold p-3 rounded-md cursor-pointer hover:bg-opacity-50 duration-200">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;