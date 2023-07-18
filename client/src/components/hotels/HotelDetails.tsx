"use client";

import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "@/components";
import { useState } from "react";

const HotelDetails = () => {
    const [ slideNumber, setSlideNumber ] = useState(0);
    const [ open, setOpen ] = useState(false);

    return (
        <>
            {
                open &&
                <div className="fixed top-0 left-0 w-screen h-screen bg-customWhite bg-opacity-30 z-50 flex items-center">
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-full text-3xl bg-customWhite cursor-pointer">
                        <FontAwesomeIcon icon={faCircleXmark} onClick={() => setOpen(false)} className="w-10 h-10 text-3xl rounded-full text-customBlue" />
                    </div>
                    <div className="fixed left-0 m-10 text-3xl w-10 h-10 rounded-full cursor-pointer bg-customWhite">
                        <FontAwesomeIcon icon={faCircleArrowLeft} onClick={() => slideNumber > 0 && setSlideNumber(previous => --previous)} className="text-3xl w-10 h-10 text-customBlue" />
                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                        <img src="/images/features.jpeg" alt="Image" className=" mx-5 max-w-[850px] w-full max-h-4/5" />
                    </div>
                    <div className="fixed right-0 m-10 text-3xl w-10 h-10 rounded-full cursor-pointer bg-customWhite">
                        <FontAwesomeIcon icon={faCircleArrowRight} onClick={() => slideNumber < 5 && setSlideNumber(previous => ++previous)} className="text-3xl w-10 h-10 text-customBlue" />
                    </div>
                </div>
            }
            <div className="w-full flex flex-col items-center gap-6">
                <div className="w-full max-w-[1400px] flex justify-between gap-3 p-5 max-[850px]:flex-col">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl font-bold">
                            Grand Hotel
                        </h1>
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faLocationDot} className="w-4 text-sm text-red-500" />
                            <span>
                                Elton St 125 New York
                            </span>
                        </div>
                        <span className="text-customBlue font-semibold">
                            Excellent location - 500m from center
                        </span>
                        <span className="font-semibold">
                            Book a stay over $114 at this property and get a free airport taxi!
                        </span>
                    </div>
                    <button className="bg-customBlue text-customWhite font-bold border-none p-3 rounded-md cursor-pointer h-fit hover:bg-opacity-50 duration-200">
                        Reserve or Book Now!
                    </button>
                </div>
                <div className="max-w-[1400px] flex flex-wrap justify-between gap-x-[1.5%] gap-y-[5%] rounded-md overflow-hidden mx-5">
                    {
                        Array.from(Array(6).keys()).map((image, index) => (
                            <div key={index} className="h-[49%] w-[32%]">
                                <img onClick={() => {setSlideNumber(index); setOpen(true)}} src="/images/features.jpeg" alt="Image" className="w-full object-cover" />
                            </div>
                        ))
                    }
                </div>
                <div className="max-w-[1400px] w-full flex max-[850px]:flex-col p-5 justify-between gap-6">
                    <div className="w-4/5 max-[850px]:w-full flex flex-col gap-3">
                        <h1 className="text-3xl font-bold">
                            Stay in the heart of Krakow
                        </h1>
                        <p className="leading-6">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Deleniti quibusdam odit exercitationem omnis possimus
                            consequatur repellendus eaque quasi iste quis nulla
                            explicabo animi, ullam obcaecati perferendis placeat.
                            Temporibus pariatur molestias quae provident quis
                            repellendus omnis nostrum itaque, libero commodi doloribus
                            sed error assumenda aperiam, possimus nulla, rem aliquid 
                            cupiditate voluptates reprehenderit. Enim earum mollitia, 
                            porro a quasi ex provident cumque doloremque accusantium 
                            doloribus alias. Voluptatibus, ea inventore eaque quo 
                            provident quibusdam sit accusamus ad esse non aperiam amet
                            neque ipsa magni. Atque repellendus, harum delectus vitae
                        </p>
                    </div>
                    <div className="w-4/12 bg-blue-100 p-3 flex flex-col justify-between gap-3 rounded-md max-[850px]:w-full">
                        <h1 className="text-2xl text-gray-500">
                            Perfect for a 9-night stay
                        </h1>
                        <span >
                            Located in the real heart of Krakow, this property has 
                            excellent location score of 9.8!
                        </span>
                        <h2 className="flex items-center justify-between">
                            <span className="font-bold text-2xl">
                                $945
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