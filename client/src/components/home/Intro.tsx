"use client";

import Search from "../common/Search";
import Link from "next/link";

const Intro = () => {
    return (
        <header className="bg-primary text-white flex flex-col items-center gap-10 p-5">
            <div className="w-full max-w-[1400px] relative flex flex-col gap-6">
                {/* Header Text Content */}
                <div className="w-full flex flex-col gap-5 mt-5 mb-16 max-xl:mb-40">
                    <h1 className="text-3xl font-bold">
                        A lifetime of discounts? It&apos;s Genius.
                    </h1>
                    <p>
                        Get rewarded for your travels - 
                        Unlock instant savings of 10% or more with a Free Booker Account!
                    </p>
                    <Link prefetch href="/hotels?city=&sort=alphabetically&range=0,999999999" className="w-fit bg-customBlue text-white font-bold p-3 cursor-pointer rounded-md hover:bg-opacity-50 duration-200">
                        Browse Hotels
                    </Link>
                </div>
                {/* Header Search */}
                <Search page="home" />
            </div>
        </header>
    )
}

export default Intro;