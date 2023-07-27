"use client";

import Sidebar from "./Sidebar";
import { faBars, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useUser from "@/utils/useUser";

const Navbar = () => {
    const [ open, setOpen ] = useState(false);
    const { user, loading } = useUser();

    return (
        <nav className="bg-primary flex justify-center p-5">
            <div className="w-full text-customWhite flex items-center justify-between max-w-[1400px] relative">
                <img src="/images/navbar-logo.png" alt="Booker" className="w-48" />
                {
                    loading ?
                    <h1 className="text-xl font-semibold max-[500px]:hidden">
                        Loading...
                    </h1>:
                    user.token ?
                    <div onClick={() => setOpen(previous => !previous)} className="flex gap-3 cursor-pointer max-[500px]:hidden">
                        <h1 className="text-xl font-semibold">
                            {
                                user.user.username
                            }
                        </h1>
                        <FontAwesomeIcon icon={faSortDown} className="w-6 text-xl" />
                    </div> :
                    <ul className="flex gap-5 text-primary text-xl duration-200 font-semibold max-[500px]:hidden">
                        <li className="cursor-pointer p-2 rounded-md uppercase bg-customWhite hover:bg-opacity-50 duration-200">
                            <a href="/signup">
                                Sign Up
                            </a>
                        </li>
                        <li className="cursor-pointer p-2 rounded-md uppercase bg-customWhite hover:bg-opacity-50 duration-200">
                            <a href="/signin">
                                Sign In
                            </a>
                        </li>
                    </ul>
                }
                <FontAwesomeIcon icon={faBars} onClick={() => setOpen(previous => !previous)} className="max-[500px]:flex hidden w-10 cursor-pointer text-3xl text-customWhite" />
                {
                    open &&
                    <Sidebar />
                }
            </div>
        </nav>
    )
}


export default Navbar;