"use client";

import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const Filters = () => {
    const [ date, setDate ] = useState<any>([{ startDate: new Date(), endDate: new Date(), key: "selection" }]);
    const [ openDate, setOpenDate ] = useState(false);

    return (
        <div className="w-[300px] max-[800px]:hidden h-fit flex flex-col gap-3 p-3 rounded-md sticky top-10 bg-customGold shadow-lg">
            <div className="flex-1">
                <h1 className="text-xl font-bold mb-4">
                    Search
                </h1>
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label className="font-semibold">
                    Destination
                </label>
                <input type="text" placeholder="Destination" className="p-3 border-none rounded-md" />
            </div>
            <div className="flex flex-col gap-2 mb-2 relative">
                  <label className="font-semibold">
                        Check-in Date
                  </label>
                  <span onClick={() =>setOpenDate(previous => !previous)} className="bg-customWhite text-gray-400 rounded-md p-3 flex items-center cursor-pointer">
                      {
                          `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`
                      }
                  </span>
                  {
                      openDate &&
                      <DateRange
                            className="absolute top-full"
                            onChange={item => setDate([item.selection])}
                            minDate={new Date()}
                            ranges={date}
                      />
                  }
            </div>
            <div>
                <label className="font-semibold">
                    Options
                </label>
                <div className="py-3">
                    <div className="flex justify-between mb-5 text-primary items-center">
                        <span>
                            Min Price Per Night
                        </span>
                        <input type="number" placeholder="200"  className="w-24 p-3 rounded-md"/>
                    </div>
                    <div className="flex justify-between mb-5 text-primary items-center">
                        <span>
                            Max Price Per Night
                        </span>
                        <input type="number"  placeholder="200" className="w-24 p-3 rounded-md"/>
                    </div>
                    <div className="flex justify-between mb-5 text-primary items-center">
                        <span>
                            Adults
                        </span>
                        <input type="number"  placeholder="200" className="w-24 p-3 rounded-md"/>
                    </div>
                    <div className="flex justify-between mb-5 text-primary items-center">
                        <span>
                            Children
                        </span>
                        <input type="number"  placeholder="200" className="w-24 p-3 rounded-md"/>
                    </div>
                    <div className="flex justify-between mb-5 text-primary items-center">
                        <span>
                            Rooms
                        </span>
                        <input type="number"  placeholder="200" className="w-24 p-3 rounded-md"/>
                    </div>
                    <button className="p-3 bg-customBlue text-customWhite font-bold border-none w-full rounded-md hover:bg-opacity-50 duration-200">
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filters;