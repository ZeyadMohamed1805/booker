"use client";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Browse } from "@/components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useUser from "@/utils/useUser";
import { useForm } from "react-hook-form";
import { Suggested } from "@/components";
import { HotelComponentsProps } from "@/utils/types";
import useReservation from "@/utils/useReservation";
import Image from "next/image";
import Link from "next/link";

const HotelDetails = ({ content }: HotelComponentsProps) => {
    const [ slideNumber, setSlideNumber ] = useState(0);
    const [ open, setOpen ] = useState(false);
    const [ openDate, setOpenDate ] = useState(false);
    const [ errors, setErrors ] = useState("");
    const [ date, setDate ] = useState<any>([{ startDate: new Date(), endDate: new Date(), key: "selection" }]);
    const days = Math.ceil(Math.abs(Number(new Date(date[0].startDate)) - Number(new Date(date[0].endDate))) / (1000 * 60 * 60 * 24));
    const { push } = useRouter();
    const { user } = useUser();
    const { handleSubmit, register } = useForm();
    const { mutate, isLoading  } = useReservation("reservation", `/users/book/${user.token && user.user._id}`);
    
    const onSubmit = (values: any) => {
        if ( !Boolean(days) ) setErrors("Reservation Must Be Atleast One Day")
        else if ( user.token ) {
            mutate({
                token: user.token,
                reservations: {
                    hotelName: content.name,
                    startDate: values.days[0].startDate,
                    endDate: values.days[0].endDate,
                    board: values.food,
                    price: Number(content.cheapestPrice) * days
                }
            });
        }
        else push("/signin");
    }

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
                            <Image src={content.photos[slideNumber]} width={850} height={565} alt="Image" className=" mx-5 max-w-[850px] w-full max-h-4/5 rounded-md" />
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
                    <Link prefetch href="/hotels?city=&sort=alphabetically&range=0,999999999" className="text-center bg-customBlue text-customWhite font-bold border-none p-3 rounded-md cursor-pointer h-fit hover:bg-opacity-50 duration-200">
                        Browse More Hotels!
                    </Link>
                </div>
                <div className="min-h-fit max-w-[1400px] flex flex-wrap justify-between gap-x-[1.5%] gap-y-[5%] max-[850px]:gap-y-[3%] max-[500px]:gap-y-[1.5%] max-[500px]:mb-28 rounded-md p-5">
                    {
                        content.photos.map((image: string, index: number) => (
                            <div key={index} className="h-[49%] w-[32%] max-[850px]:w-[49%] max-[850px]:h-[32%] max-[500px]:w-[100%] max-[500px]:h-[16.67%]">
                                <Image onClick={() => {setSlideNumber(index); setOpen(true)}} src={image} width={450} height={326} alt={content.name} className="h-full w-full object-cover cursor-pointer rounded-md hover:scale-[1.05] duration-200" />
                            </div>
                        ))
                    }
                </div>
                <div className="max-w-[1400px] w-full flex max-[850px]:flex-col p-5 justify-between gap-6">
                    <div className="w-4/5 max-[850px]:w-full flex flex-col gap-3">
                        <h1 className="text-3xl font-bold">
                            Description
                        </h1>
                        <p className="leading-6">
                            {
                                content.description
                            }
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-4/12 bg-blue-100 p-3 flex flex-col justify-between gap-3 rounded-md max-[850px]:w-full">
                        <div className="w-full flex flex-col justify-center gap-3 relative">
                            <span {...register("days", { value: date})} suppressHydrationWarning className="w-full bg-customWhite text-gray-400 cursor-pointer border-solid border-2 outline-none border-gray-400 p-2 rounded-md" onClick={() => setOpenDate(previous => !previous)}>
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
                            <span className="text-red-500 font-semibold">
                                {
                                    days <= 0 && errors
                                }
                            </span>
                        </div>
                        <select {...register("food")} defaultValue={"Full Board"} name="food" className="w-full bg-customWhite text-gray-400 cursor-pointer border-solid border-2 outline-none border-gray-400 p-2 rounded-md">
                            <option value="Full Board">
                                Full Board
                            </option>
                            <option value="Half Board">
                                Half Board
                            </option>
                        </select>
                        <h2 className="flex items-center justify-between">
                            <span className="font-bold text-2xl">
                                {
                                    `$${Number(content.cheapestPrice) * days}`
                                }
                            </span> 
                            <span>
                                {
                                    `( ${days} Days)`
                                }
                            </span>
                        </h2>
                        <button disabled={isLoading ? true : false} type="submit" className={`bg-customBlue text-customWhite ${isLoading && "bg-opacity-50"} ${isLoading ? "cursor-not-allowed" : "cursor-pointer"} font-bold border-none p-3 rounded-md h-fit hover:bg-opacity-50 duration-200`}>
                            {
                                isLoading ?
                                "Loading..." :
                                "Reserve or Book Now!"
                            }
                        </button>
                    </form>
                </div>
                <Suggested content={content} />
                <Browse />
            </div>
        </>
    )
}

export default HotelDetails;