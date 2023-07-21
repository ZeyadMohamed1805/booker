"use client";

import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "@/components";
import { useState } from "react";

const HotelDetails = ({ content }: any) => {
    const [ slideNumber, setSlideNumber ] = useState(0);
    const [ open, setOpen ] = useState(false);
    console.log(content)

    return (
        <>
            {
                open &&
                <div className="fixed top-0 left-0 w-screen h-screen bg-customWhite bg-opacity-30 z-50 flex items-center justify-center">
                    <div className="relative w-screen height-screen max-w-[1400px] flex items-center">
                        <div className="absolute top-3 right-3 w-10 h-10 rounded-full text-3xl bg-customWhite cursor-pointer">
                            <FontAwesomeIcon icon={faCircleXmark} onClick={() => setOpen(false)} className="w-10 h-10 text-3xl rounded-full text-customBlue" />
                        </div>
                        <div className="absolute left-0 m-10 text-3xl w-10 h-10 rounded-full cursor-pointer bg-customWhite">
                            <FontAwesomeIcon icon={faCircleArrowLeft} onClick={() => slideNumber > 0 && setSlideNumber(previous => --previous)} className="text-3xl w-10 h-10 text-customBlue" />
                        </div>
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={content.photos[slideNumber]} alt="Image" className=" mx-5 max-w-[850px] w-full max-h-4/5 rounded-md" />
                        </div>
                        <div className="absolute right-0 m-10 text-3xl w-10 h-10 rounded-full cursor-pointer bg-customWhite">
                            <FontAwesomeIcon icon={faCircleArrowRight} onClick={() => slideNumber < 5 && setSlideNumber(previous => ++previous)} className="text-3xl w-10 h-10 text-customBlue" />
                        </div>
                    </div>
                </div>
            }
            <div className="w-full flex flex-col items-center gap-6">
                <div className="w-full max-w-[1400px] flex justify-between gap-3 p-5 max-[850px]:flex-col">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl font-bold">
                            {
                                content.name
                            }
                        </h1>
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faLocationDot} className="w-5 text-2xl text-red-500" />
                            <span className="text-2xl">
                                {
                                    content.address
                                }
                            </span>
                        </div>
                        <span className="text-lg text-customBlue font-semibold">
                            {
                                `Excellent location - ${content.distance}m from center`
                            }
                        </span>
                        <span className="text-lg font-semibold">
                            {
                                `Book a stay over $${content.cheapestPrice} at this property and get a free airport taxi!`
                            }
                        </span>
                    </div>
                    <button className="bg-customBlue text-customWhite font-bold border-none p-3 rounded-md cursor-pointer h-fit hover:bg-opacity-50 duration-200">
                        Reserve or Book Now!
                    </button>
                </div>
                <div className="min-h-fit max-w-[1400px] flex flex-wrap justify-between gap-x-[1.5%] gap-y-[5%] max-[850px]:gap-y-[3%] max-[500px]:gap-y-[1.5%] max-[500px]:mb-28 rounded-md mx-5">
                    {
                        content.photos.map((image: string, index: number) => (
                            <div key={index} className="h-[49%] w-[32%] max-[850px]:w-[49%] max-[850px]:h-[32%] max-[500px]:w-[100%] max-[500px]:h-[16.67%]">
                                <img onClick={() => {setSlideNumber(index); setOpen(true)}} src={image} alt={content.name} className="h-full w-full object-cover cursor-pointer rounded-md hover:scale-[1.05] duration-200" />
                            </div>
                        ))
                    }
                </div>
                <div className="max-w-[1400px] w-full flex max-[850px]:flex-col p-5 justify-between gap-6">
                    <div className="w-4/5 max-[850px]:w-full flex flex-col gap-3">
                        <h1 className="text-3xl font-bold">
                            {
                                content.title
                            }
                        </h1>
                        <p className="leading-6">
                            {
                                content.description
                            }
                        </p>
                    </div>
                    <div className="w-4/12 bg-blue-100 p-3 flex flex-col justify-between gap-3 rounded-md max-[850px]:w-full">
                        <h1 className="text-2xl text-gray-500">
                            Perfect for a 9-night stay
                        </h1>
                        <span >
                            {
                                `Located at ${content.address}, this property has excellent location score of ${content.rating}!`
                            }
                        </span>
                        <h2 className="flex items-center justify-between">
                            <span className="font-bold text-2xl">
                                {
                                    `$${content.cheapestPrice}`
                                }
                            </span> 
                            <span>
                                (9 nights)
                            </span>
                        </h2>
                        <button className="bg-customBlue text-customWhite font-bold border-none p-3 rounded-md cursor-pointer h-fit hover:bg-opacity-50 duration-200">
                            Reserve or Book Now!
                        </button>
                    </div>
                </div>
                <Mail />
            </div>
        </>
    )
}

export default HotelDetails;