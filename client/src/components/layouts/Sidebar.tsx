"use client";

import { format } from "date-fns";
import useUser from "@/utils/useUser";

const Sidebar = () => {
    const { user, loading } = useUser();

    const signOut = () => {
        localStorage.removeItem("booker_user");
        location.reload();
    }

    return (
        <div className={`z-50 max-[500px]:w-full ${user.token ? "flex" : "hidden"} max-[500px]:flex justify-center rounded-md absolute top-20 right-0 w-[500px]`}>
            <ul className="z-50 max-w-[1400px] gap-5 bg-customBlue p-5 rounded-md w-full text-primary text-xl duration-200 font-semibold flex flex-col">
                {
                    loading ?
                    <h1 className="text-xl font-semibold text-customWhite">
                        Loading...
                    </h1> :
                    user.token ?
                    <>
                        <label className="w-full text-center text-xl font-bold bg-customWhite text-primary rounded-md p-3">
                            {
                                user.user.username
                            }
                        </label>
                        <h1 className="text-xl font-semibold text-customWhite flex justify-between items-center gap-3 w-full">
                            <span>
                                Reservations:
                            </span>
                            <span>
                                {
                                    user.user.reservations.length
                                }
                            </span>
                        </h1>
                        {
                            user.user.reservations.map((reservation: any, index: number) => (
                                <li key={index} className="w-full flex items-center justify-between gap-3 text-white text-base font-semibold">
                                    <span>
                                        - {reservation.hotelName}
                                    </span>
                                    <span>
                                        {format(new Date(reservation.startDate), "MM/dd/yyyy")}
                                    </span>
                                </li>
                            ))
                        }
                        <li className="w-full text-customWhite font-bold text-xl text-center cursor-pointer p-2 rounded-md uppercase bg-primary hover:bg-opacity-50 duration-200">
                            <button onClick={() => signOut()}>
                                Sign Out
                            </button>
                        </li>
                    </> :
                    <>
                        <a href="/signup">
                            <li className="w-full text-center z-50 cursor-pointer p-2 rounded-md uppercase bg-customWhite hover:bg-opacity-50 duration-200">
                                    Sign Up
                            </li>
                        </a>
                        <a href="/signin">
                            <li className="w-full text-center z-50 cursor-pointer p-2 rounded-md uppercase bg-customWhite hover:bg-opacity-50 duration-200">
                                Sign In
                            </li>
                        </a>
                    </>
                }
            </ul>
        </div>
    )
}

export default Sidebar