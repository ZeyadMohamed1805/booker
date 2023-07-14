"use client";

import { OptionProps } from "@/utils/types";

const Option = ({ option, setOption }: OptionProps) => {
    return (
        <div className="w-full flex justify-between gap-3">
            <span>
                {
                    option[0]
                }
            </span>
            <div className="flex items-center gap-3">
                <button disabled={ option[1] === 0 } onClick={() => setOption(option[0], "-")} className="w-10 h-10 border-solid border-customBlue border-2 text-customBlue cursor-pointer disabled:cursor-not-allowed">
                    -
                </button>
                <span>
                    {
                        option[1]
                    }
                </span>
                <button onClick={() => setOption(option[0], "+")} className="w-10 h-10 border-solid border-customBlue border-2 text-customBlue cursor-pointer">
                    +
                </button>
            </div>
        </div>
    )
}

export default Option;